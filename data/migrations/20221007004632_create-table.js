exports.up = function(knex) {
  return knex.schema.createTable('messages', tbl => {
    tbl.increments('message_id');
    tbl.string('message');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages')
};
