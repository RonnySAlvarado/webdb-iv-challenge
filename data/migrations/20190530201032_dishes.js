exports.up = async function(knex) {
  await knex.schema.createTable("dishes", tbl => {
    tbl.increments("id"); // primary key for dishes
    tbl.string("name").notNullable(); // name of dishes
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("dishes");
};
