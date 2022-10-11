exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {user_id: 1, username: 'fakeuser1'},
    {user_id: 2, username: 'fakeuser2'},
    {user_id: 3, username: 'fakeuser3'}
  ]);
};
