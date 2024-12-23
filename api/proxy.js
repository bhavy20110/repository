export default async function handler(req, res) {
  try {
    // Handle CORS preflight request
    if (req.method === "OPTIONS") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.status(204).end();
      return;
    }

    // Define the static M3U8 URL
    const m3u8Url = "https://amit.allinonereborn.in/jiobe.m3u8?id=1091";

    // Set CORS and cache headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Cache-Control", "public, max-age=10");

    // Redirect to the M3U8 URL (or fetch it if required)
    res.redirect(302, m3u8Url);
  } catch (error) {
    console.error("Error in M3U8 handler:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
