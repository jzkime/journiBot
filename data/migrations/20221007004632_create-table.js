exports.up = function(knex) {
  return knex.schema.createTable('love', tbl => {
    tbl.increments('love_id');
    tbl.string('love_message');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('love')
};
