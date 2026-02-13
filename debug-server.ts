import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

console.log("Imports done");

const app = new Hono();
app.use("/*", cors());
app.get("/health", (c) => c.text("OK"));

const port = 3005;
console.log(`Starting on ${port}`);

serve({
  fetch: app.fetch,
  port
}, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
