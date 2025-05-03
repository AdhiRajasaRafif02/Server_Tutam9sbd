const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models"); // ⬅️ ambil dari index.js model

const profileRoutes = require("./routes/profileRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Gunakan routes
app.use("/api/profiles", profileRoutes);
app.use("/api/schedules", scheduleRoutes);

// Sync DB
sequelize.sync().then(() => {
  console.log("Database synced");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
