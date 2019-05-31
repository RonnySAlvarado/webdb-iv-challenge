exports.up = async function(knex) {
  await knex.schema.createTable("recipes", tbl => {
    tbl.increments("id"); // primary key for recipes
    tbl.string("name").notNullable(); // name of recipes
    tbl
      .string("dish_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes");
};
