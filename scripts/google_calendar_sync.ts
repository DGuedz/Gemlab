import "dotenv/config";
import { google } from "googleapis";

type Milestone = {
  title: string;
  monthOffsetStart: number;
  monthOffsetEnd: number;
  details: string;
};

const PREFIX = "GEMLAB | ";

const MILESTONES: Milestone[] = [
  {
    title: "M1-M2 Estruturacao Tecnica e Governanca",
    monthOffsetStart: 0,
    monthOffsetEnd: 1,
    details:
      "Refino do MVP, protocolo Raman, modelagem SpectralHash e desenho da trilha EAS.",
  },
  {
    title: "M3-M4 Desenvolvimento MVP + Testnet",
    monthOffsetStart: 2,
    monthOffsetEnd: 3,
    details:
      "Backend, frontend, emissao de certificado digital/QR e integracao testnet.",
  },
  {
    title: "M5-M6 Validacao Tecnica e Piloto Operacional",
    monthOffsetStart: 4,
    monthOffsetEnd: 5,
    details:
      "Testes ponta a ponta com lotes reais e estabilidade do fluxo de rastreabilidade.",
  },
  {
    title: "M7 Marco Feira das Esmeraldas 2026",
    monthOffsetStart: 6,
    monthOffsetEnd: 6,
    details:
      "Demonstracao publica do MVP, onboarding inicial de parceiros e certificacoes piloto.",
  },
  {
    title: "M8-M9 Expansao do Piloto",
    monthOffsetStart: 7,
    monthOffsetEnd: 8,
    details:
      "Onboarding assistido, emissao continua, coleta de feedback e ajustes operacionais.",
  },
  {
    title: "M10-M11 Preparacao Comercial GTM",
    monthOffsetStart: 9,
    monthOffsetEnd: 10,
    details:
      "Precificacao final, materiais de vendas e padronizacao de onboarding B2B.",
  },
  {
    title: "M12 Lancamento GTM e Encerramento",
    monthOffsetStart: 11,
    monthOffsetEnd: 11,
    details:
      "Relatorio final FAPEG, prestacao de contas e plano de continuidade pos-fomento.",
  },
];

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Variavel obrigatoria ausente: ${name}`);
  }
  return value.trim();
}

function parseServiceAccount() {
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64?.trim();
  const filePath = process.env.GOOGLE_SERVICE_ACCOUNT_FILE?.trim();

  if (b64) {
    const decoded = Buffer.from(b64, "base64").toString("utf-8");
    return JSON.parse(decoded);
  }

  if (filePath) {
    // Dynamic import avoids bundler/node resolution issues.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require("fs");
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  throw new Error(
    "Defina GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 ou GOOGLE_SERVICE_ACCOUNT_FILE."
  );
}

function toISODate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function addMonths(date: Date, months: number): Date {
  const next = new Date(date);
  next.setMonth(next.getMonth() + months);
  return next;
}

function monthStart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function monthEnd(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

async function main() {
  const calendarId = requireEnv("GOOGLE_CALENDAR_ID");
  const projectStart = requireEnv("GEMLAB_PROJECT_START_DATE"); // YYYY-MM-DD
  const dryRun = process.argv.includes("--dry-run");
  const replace = process.argv.includes("--replace");

  const startDate = new Date(`${projectStart}T00:00:00`);
  if (Number.isNaN(startDate.getTime())) {
    throw new Error(
      "GEMLAB_PROJECT_START_DATE invalida. Use formato YYYY-MM-DD."
    );
  }

  const credentials = parseServiceAccount();
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  const calendar = google.calendar({ version: "v3", auth });

  const overallStart = monthStart(startDate);
  const overallEnd = monthEnd(addMonths(startDate, 11));

  if (replace) {
    const existing = await calendar.events.list({
      calendarId,
      q: PREFIX,
      timeMin: new Date(overallStart.getTime() - 24 * 3600 * 1000).toISOString(),
      timeMax: new Date(overallEnd.getTime() + 24 * 3600 * 1000).toISOString(),
      singleEvents: true,
      maxResults: 250,
    });

    const items = existing.data.items ?? [];
    for (const event of items) {
      if (!event.id || !(event.summary ?? "").startsWith(PREFIX)) continue;
      if (dryRun) {
        console.log(`[dry-run] delete ${event.summary}`);
      } else {
        await calendar.events.delete({ calendarId, eventId: event.id });
        console.log(`deleted ${event.summary}`);
      }
    }
  }

  for (const milestone of MILESTONES) {
    const s = monthStart(addMonths(startDate, milestone.monthOffsetStart));
    const e = monthEnd(addMonths(startDate, milestone.monthOffsetEnd));

    const summary = `${PREFIX}${milestone.title}`;
    const description = [
      "Cronograma GEMLAB (Programa Centelha GO)",
      `Periodo: ${toISODate(s)} ate ${toISODate(e)}`,
      `Marco: ${milestone.details}`,
    ].join("\n");

    const payload = {
      summary,
      description,
      start: { date: toISODate(s) },
      end: { date: toISODate(new Date(e.getTime() + 24 * 3600 * 1000)) },
      colorId: "2",
    };

    if (dryRun) {
      console.log(`[dry-run] create ${summary} (${payload.start.date} -> ${e.toISOString().slice(0, 10)})`);
    } else {
      await calendar.events.insert({
        calendarId,
        requestBody: payload,
      });
      console.log(`created ${summary}`);
    }
  }

  console.log(
    dryRun
      ? "Dry-run finalizado. Nenhum evento foi criado/deletado."
      : "Sincronizacao concluida com sucesso."
  );
}

main().catch((err) => {
  console.error("Falha ao sincronizar Google Calendar:");
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});

