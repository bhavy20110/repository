import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.status(204).end();
      return;
    }

    const m3u8Url = "https://amit.allinonereborn.in/jiobe.m3u8?id=1091";

    // Fetch the M3U8 content
    const response = await fetch(m3u8Url);

    if (!response.ok) {
      throw new Error(`Failed to fetch M3U8: ${response.statusText}`);
    }

    const content = await response.text();

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");

    // Send the M3U8 content
    res.status(200).send(content);
  } catch (error) {
    console.error("Error fetching M3U8:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
    
