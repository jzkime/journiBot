exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('user_id');
    tbl.string('discord_id');
  }).createTable('messages', tbl => {
    tbl.increments('message_id');
    tbl.string('user_id')
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable();
    tbl.integer('timestamp')
      .notNullable();
    tbl.string('message')
      .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages')
    .dropTableIfExists('users')
};
