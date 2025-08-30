import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const BITLY_API_URL = "https://api-ssl.bitly.com/v4/shorten";
const BITLY_TOKEN = process.env.BITLY_ACCESS_TOKEN;

// Shorten URL using Bitly REST API
export const shortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  // Validate input
  if (!longUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Check if token exists
  if (!BITLY_TOKEN) {
    return res
      .status(500)
      .json({ error: "Bitly Access Token is missing in environment variables." });
  }

  try {
    const response = await axios.post(
      BITLY_API_URL,
      { long_url: longUrl },
      {
        headers: {
          Authorization: `Bearer ${BITLY_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Send back the shortened URL
    res.json({ longUrl, shortUrl: response.data.link });
  } catch (error) {
    console.error(
      "Bitly API error:",
      error.response?.data || error.message
    );
    res.status(500).json({
      error: "Failed to shorten URL",
      details: error.response?.data || error.message,
    });
  }
};

// Redirect (not needed for Bitly) - just a placeholder
export const redirectUrl = (req, res) => {
  res.status(400).send("Redirects are handled by Bitly, not this server.");
};
