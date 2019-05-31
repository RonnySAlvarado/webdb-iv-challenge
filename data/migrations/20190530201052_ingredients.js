exports.up = async function(knex) {
  await knex.schema.createTable("ingredients", tbl => {
    tbl.increments("id"); // primary key for ingredients
    tbl.string("name").notNullable(); // name of ingredient
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ingredients");
};
