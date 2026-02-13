
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { config } from "dotenv";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

console.log("Starting Server...");

// Load environment variables
config();

const app = new Hono();

// Enable CORS
app.use("/*", cors());

// Health Check
app.get("/health", (c) => {
  return c.json({ status: "ok", service: "GEMLAB Backend API" });
});

// API V1 Routes
const api = new Hono();

// Certification Routes
const spectralHashSchema = z.object({
  ramanData: z.array(z.number()),
  timestamp: z.number().optional()
});

api.post("/certification/spectral-hash", zValidator("json", spectralHashSchema), async (c) => {
  try {
    const body = c.req.valid("json");
    // In a real scenario, this would validate the spectrum data integrity
    // For now, we simulate a hash calculation
    const hash = "0x" + Buffer.from(JSON.stringify(body)).toString("hex").substring(0, 64);
    return c.json({ hash });
  } catch (e) {
    console.error(e);
    return c.json({ error: "Failed to generate spectral hash" }, 500);
  }
});

const attestSchema = z.object({
  spectralHash: z.string().startsWith("0x"),
  easUID: z.string().optional(),
  recipient: z.string().startsWith("0x").length(42).optional()
});

api.post("/certification/attest", zValidator("json", attestSchema), async (c) => {
  try {
    const body = c.req.valid("json");
    
    // Check if we have private key configured
    if (!process.env.GEMLAB_PRIVATE_KEY && !process.env.PRIVATE_KEY) {
      console.warn("No private key found. Running in MOCK mode for attestation.");
      return c.json({ 
        uid: "0x" + Math.random().toString(16).substr(2, 64),
        status: "mocked"
      });
    }

    const uid = "0xMockedUIDForDebug";

    return c.json({ uid });
  } catch (e) {
    console.error("Attestation Error:", e);
    // Fallback to mock if real attestation fails (for dev experience)
    return c.json({ 
      uid: "0x" + Math.random().toString(16).substr(2, 64),
      error: String(e)
    });
  }
});

const mintSchema = z.object({
  attestationUID: z.string().startsWith("0x"),
  metadata: z.object({
    name: z.string()
  })
});

api.post("/certification/mint", zValidator("json", mintSchema), async (c) => {
  try {
    // const body = c.req.valid("json");
    // Here we would call the Smart Contract to mint the NFT
    // For now, return a mock response
    return c.json({
      ipfsCid: "Qm" + Math.random().toString(36).substr(2, 44),
      nftTokenId: Math.floor(Math.random() * 10000).toString(),
    });
  } catch (e) {
    return c.json({ error: "Failed to mint NFT" }, 500);
  }
});

// Mount API
app.route("/api/v1", api);

// Start Server
const port = 3001;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port
});

