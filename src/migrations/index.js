const { conn } = require("../db");

async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS soma (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      v1 REAL,
      v2 REAL,
      resultado REAL
    )
  `;
  const db = await conn();
  await db.run(sql);
}

async function down() {
  const sql = `DROP TABLE soma`;
  const db = await conn();
  await db.run(sql);
}

module.exports = { up, down };
