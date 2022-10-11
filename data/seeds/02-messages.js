exports.seed = async function(knex) {
  await knex('messages').truncate()
  await knex('messages').insert([
    {message_id: 1, user_id: 1, message: 'this is a very first random message'},
    {message_id: 2, user_id: 2, message: 'yooyoyoy swag meme dab'},
    {message_id: 3, user_id: 3, message: 'idk bro this is a mindless thing i be doin'}
  ]);
};
