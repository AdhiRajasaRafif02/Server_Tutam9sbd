const express = require("express");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");

const app = express();
app.use(express.json());

// Configure CORS to allow requests from the deployed client
const corsOptions = {
  origin: 'https://client-tutam9sbd.vercel.app', // Replace with your deployed client URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Tambahkan route default
app.get("/", (req, res) => {
  res.send("API is running!");
});

// Gunakan routes
app.use("/api/profiles", profileRoutes);
app.use("/api/schedules", scheduleRoutes);

// Pakai PORT dari env (penting untuk Vercel)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
