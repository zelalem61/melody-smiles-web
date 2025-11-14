import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
import { handleFormPayload } from "../src/api/route";

const app = express();

app.use(express.json());

app.post("/api", async (req: Request, res: Response) => {
  try {
    const result = await handleFormPayload(req.body);
    res.status(result.status).json(result.body);
  } catch (error) {
    console.error("[server] Unhandled error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = Number(process.env.API_PORT ?? 8787);

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});


