const db = require("./dbConfig");

module.exports = {
  getAll
};

function getAll(query = {}) {
  let { sortby = "id", sortdir = "asc" } = query;

  let dishes = db("dishes").orderBy(sortby, sortdir);

  return dishes;
}
