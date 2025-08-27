import dotenv from "dotenv";
import { BitlyClient } from "bitly";

dotenv.config();

const bitly = new BitlyClient(process.env.BITLY_ACCESS_TOKEN);

// Shorten using Bitly
export const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await bitly.shorten(longUrl);
    res.json({ longUrl, shortUrl: response.link });
  } catch (error) {
    console.error("Bitly error:", error.message);
    res.status(500).json({ error: "Failed to shorten URL" });
  }
};

// Redirect not needed for Bitly, but you can keep a placeholder
export const redirectUrl = (req, res) => {
  res.status(400).send("Redirects are handled by Bitly, not this server.");
};
