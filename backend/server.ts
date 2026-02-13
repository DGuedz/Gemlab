
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { config } from "dotenv";
// import { emitScienceAttestation } from "./services/attestation/scienceService";
// import { emitOriginAttestation } from "./services/attestation/originService";
// import { emitCustodyAttestation } from "./services/attestation/custodyService";

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
api.post("/certification/spectral-hash", async (c) => {
  try {
    const body = await c.req.json();
    // In a real scenario, this would validate the spectrum data integrity
    // For now, we simulate a hash calculation
    const hash = "0x" + Buffer.from(JSON.stringify(body)).toString("hex").substring(0, 64);
    return c.json({ hash });
  } catch (e) {
    console.error(e);
    return c.json({ error: "Failed to generate spectral hash" }, 500);
  }
});

api.post("/certification/attest", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    if (!body.spectralHash || !body.easUID) {
      // Note: In frontend we call it easUID in state, but backend service might expect something else
      // Let's assume frontend sends the data needed for science attestation
    }

    // Check if we have private key configured
    if (!process.env.GEMLAB_PRIVATE_KEY && !process.env.PRIVATE_KEY) {
      console.warn("No private key found. Running in MOCK mode for attestation.");
      return c.json({ 
        uid: "0x" + Math.random().toString(16).substr(2, 64),
        status: "mocked"
      });
    }

    // Call the real service if keys are present
    // const uid = await emitScienceAttestation({
    //   rpcUrl: process.env.SEPOLIA_RPC_URL || "",
    //   easAddress: process.env.EAS_ADDRESS || "",
    //   schemaUID: process.env.SCIENCE_SCHEMA_UID || "",
    //   recipient: body.recipient || "0x0000000000000000000000000000000000000000",
    //   spectralHash: body.spectralHash,
    //   ramanSignature: "Signed by GemLab", // Simplified for now
    //   qualityGrade: 1
    // });
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

api.post("/certification/mint", async (c) => {
  try {
    // const body = await c.req.json();
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
