const Operation = require("../models/Operation");

const index = async (req, res) => {
  const soma = await Operation.create();
  res.json(soma);
};

const readAll = async (req, res) => {
  const soma = await Operation.readAll();
  res.json(soma);
};

const create = async (req, res) => {
  const soma = await Operation.create();

  res.render("operation/index.njk", { soma });
};

module.exports = { index, readAll, create };
