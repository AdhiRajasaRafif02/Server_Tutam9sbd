const pool = require('../config/db');

// Define queries or helper functions for Profile and Schedule
const Profile = {
  async getAll() {
    const result = await pool.query('SELECT * FROM profiles');
    return result.rows;
  },
  // Add more methods as needed
};

const Schedule = {
  async getAll() {
    const result = await pool.query('SELECT * FROM schedules');
    return result.rows;
  },
  // Add more methods as needed
};

module.exports = {
  Profile,
  Schedule,
};
