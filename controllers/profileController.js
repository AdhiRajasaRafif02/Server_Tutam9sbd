const { Profile } = require("../models");

// Ambil semua profil
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (err) {
    console.error("Error fetching profiles:", err);
    res.status(500).json({ error: err.message });
  }
};

// Tambah profil baru
exports.createProfile = async (req, res) => {
  try {
    const { name, status } = req.body;
    const profile = await Profile.create({ name, status });
    res.status(201).json(profile);
  } catch (err) {
    console.error("Error creating profile:", err);
    res.status(500).json({ error: err.message });
  }
};

// Hapus profil
exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    await Profile.destroy({ where: { id } });
    res.json({ message: "Profile deleted" });
  } catch (err) {
    console.error("Error deleting profile:", err);
    res.status(500).json({ error: err.message });
  }
};
