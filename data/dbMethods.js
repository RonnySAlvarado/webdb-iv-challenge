const db = require("./dbConfig");

module.exports = {
  getDishes
};

function getDishes(query = {}) {
  let { sortby = "id", sortdir = "asc" } = query;

  let dishes = db("dishes").orderBy(sortby, sortdir);

  return dishes;
}
