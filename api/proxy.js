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

    // Get the 'id' parameter from the query
    const { id } = req.query;

    // Check if 'id' parameter is provided
    if (!id) {
      res.status(400).json({ error: "Missing 'id' query parameter." });
      return;
    }

    // Build the proxied URL
    const proxiedUrl = https://m3u8-proxy-six.vercel.app/m3u8-proxy?url=https://amitb3669.github.io/jiobe.m3u?id=${id}&headers=%7B%22referer%22%3A%22https%3A%2F%2F9anime.pl%22%7D;

    // Set CORS and cache headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Cache-Control", "public, max-age=10");

    // Redirect to the proxied URL
    res.redirect(302, proxiedUrl);
  } catch (error) {
    console.error("Error in proxy handler:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
