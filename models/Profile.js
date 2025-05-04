const pool = require('../config/db');

const Profile = {
  async create(data) {
    const query = 'INSERT INTO Profiles (name, status) VALUES ($1, $2) RETURNING *';
    const values = [data.name, data.status];
    const result = await pool.query(query, values);
    return result.rows[0];
  },
  async getAll() {
    const result = await pool.query('SELECT * FROM profiles');
    return result.rows;
  },
  // Add more methods as needed
};

module.exports = Profile;
