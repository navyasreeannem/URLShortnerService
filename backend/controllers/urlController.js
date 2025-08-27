import { nanoid } from "nanoid";
import db from "../utils/db.js";

export const shortenUrl = (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortId = nanoid(6);
  db[shortId] = longUrl;

  const shortUrl = `${process.env.BASE_URL}/${shortId}`;
  res.json({ longUrl, shortUrl });
};

export const redirectUrl = (req, res) => {
  const { shortId } = req.params;
  const longUrl = db[shortId];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send("URL not found");
  }
};
