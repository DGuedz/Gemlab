import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import auth from "./auth.tsx";
import userData from "./user-data.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-6272b4ab/health", (c) => {
  return c.json({ status: "ok" });
});

// Auth routes
app.route("/make-server-6272b4ab/auth", auth);

// User data routes
app.route("/make-server-6272b4ab/user-data", userData);

Deno.serve(app.fetch);