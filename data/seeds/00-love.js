exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('love').truncate()
  await knex('love').insert([
    {love_id: 1, love_message: 'yooooooo'},
    {love_id: 2, love_message: 'hello world'},
    {love_id: 3, love_message: 'uwu'},
    {love_id: 4, love_message: 'i love you to the moon and back'},
    {love_id: 5, love_message: 'you are my sunshine'},
    {love_id: 6, love_message: 'spending time with you makes the world worth experiencing'},
  ]);
};