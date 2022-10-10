exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').truncate()
  await knex('messages').insert([
    {message_id: 1, message: 'youoouyoyodyoyoy'},
    {message_id: 2, message: 'hello world'},
    {message_id: 3, message: 'uwu'},
    {message_id: 4, message: 'i love you to the moon and back'},
    {message_id: 5, message: 'you are my sunshine'},
    {message_id: 6, message: 'spending time with you makes the world worth experiencing'},
  ]);
};