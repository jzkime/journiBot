exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('user_id');
    tbl.string('username');
  }).createTable('messages', tbl => {
    tbl.increments('message_id');
    tbl.string('user_id')
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable();
    tbl.string('message');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages')
    .dropTableIfExists('users')
};
