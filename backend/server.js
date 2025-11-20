import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

// 🟦 1. City Coordinates
app.get("/api/city", async (req, res) => {
  const { query } = req.query;

  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`;

  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  });

  const data = await response.json();
  res.json(data);
});

// 🟩 2. Nearby Places (THIS ROUTE WAS MISSING)
app.get("/api/nearby", async (req, res) => {
  const { lat, lon } = req.query;

  const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lat=${lat}&lon=${lon}&apikey=${process.env.OPENTRIPMAP_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  res.json(data);
});

// 🟧 3. Place Details
app.get("/api/place/:xid", async (req, res) => {
  const xid = req.params.xid;

  const url = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.OPENTRIPMAP_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));
