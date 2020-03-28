exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    //create an id to each ong
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("value").notNullable();
    //to relationship with table ongs
    table.string("ong_id").notNullable();
    //foreign key of ongs tables
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
