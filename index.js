const express = require("express");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");

const app = express();
app.use(cors());
app.use(express.json());

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
