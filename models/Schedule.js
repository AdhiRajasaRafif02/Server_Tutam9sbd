const pool = require('../config/db');

const Schedule = {
  async create(data) {
    const query = 'INSERT INTO Schedules (day, subject, start_time, end_time, profile_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [data.day, data.subject, data.start_time, data.end_time, data.profile_id];
    const result = await pool.query(query, values);
    return result.rows[0];
  },
  async getAll() {
    const result = await pool.query('SELECT * FROM schedules');
    return result.rows;
  },
  // Add more methods as needed
};

module.exports = Schedule;
