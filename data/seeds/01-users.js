exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {user_id: 1, discord_id: 'fakeuser1'},
    {user_id: 2, discord_id: 'fakeuser2'},
    {user_id: 3, discord_id: 'fakeuser3'}
  ]);
};
