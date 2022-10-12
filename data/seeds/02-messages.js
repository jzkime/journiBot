exports.seed = async function(knex) {
  await knex('messages').truncate()
  await knex('messages').insert([
    {message_id: 1, user_id: 1, timestamp: 12345321, message: 'this is a very first random message'},
    {message_id: 2, user_id: 2, timestamp: 12345322, message: 'yooyoyoy swag meme dab'},
    {message_id: 3, user_id: 3, timestamp: 12345323, message: 'idk bro this is a mindless thing i be doin'}
  ]);
};
