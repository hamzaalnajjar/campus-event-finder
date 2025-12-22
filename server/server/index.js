import express from "express";
import cors from "cors";
import { supabase } from "./supabaseClient.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/events", async (req, res) => {
  const { data, error } = await supabase.from("events").select("*");
  if (error) {
    res.status(500).json({ error });
  } else {
    res.json(data);
  }
});

app.post("/api/events", async (req, res) => {
  const { title, category, date } = req.body;
  const { data, error } = await supabase
    .from("events")
    .insert([{ title, category, date }]);
  if (error) {
    res.status(500).json({ error });
  } else {
    res.json(data);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
