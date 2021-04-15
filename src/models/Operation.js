const { conn } = require("../db");

async function create(data) {
  const sql = `
  INSERT INTO
    soma (v1, v2, resultado)
  VALUES
    (?, ?, ?)
  `;
  const db = await conn();
  const { v1, v2, resultado } = data;
  const { lastID } = await db.run(sql, [v1, v2, resultado]);
  return lastID;
}

async function readAll() {
  const sql = `
    SELECT
      *
    FROM
      soma
  `;
  const db = await conn();
  const resultado = await db.all(sql);
  return resultado;
}

module.exports = { create, readAll };
