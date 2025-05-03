const { Schedule } = require("../models");

// Ambil semua jadwal untuk 1 profil
exports.getSchedulesByProfile = async (req, res) => {
  try {
    const { profileId } = req.params;
    const schedules = await Schedule.findAll({ where: { profile_id: profileId } });
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Tambah jadwal
exports.createSchedule = async (req, res) => {
  try {
    console.log("Body:", req.body);
    const { day, subject, start_time, end_time, profile_id } = req.body;
    const schedule = await Schedule.create({ day, subject, start_time, end_time, profile_id });
    res.status(201).json(schedule);
  } catch (err) {
    console.error("Error creating schedule:", err);
    res.status(500).json({ error: err.message });
  }
};

// Edit jadwal
exports.updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const { day, subject, start_time, end_time } = req.body;
    const updated = await Schedule.update(
      { day, subject, start_time, end_time },
      { where: { id } }
    );
    res.json({ message: "Schedule updated", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Hapus jadwal
exports.deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    await Schedule.destroy({ where: { id } });
    res.json({ message: "Schedule deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
