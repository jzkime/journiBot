# journiBot
## creator: Jazmine Kime
a Discord Bot created with Discord.js, utilizing environment variables, Knex, and a sqlite3 database. 

## features
### /memem
  /features/messageWatch
 * /__watch:__ bot automatically watches and saves specific words from posts to database
    * 3 messages for each user is the limit
    * continuously replaces oldest message
* /__mememMiddleware__
  * when a user is mentioned, if that user is connected with words saved in the database, returns a phrase using one of those words
      
### /love
returns a random phrase from the database

### /addlove
adds a new phrase in the 'love' database, that can later be randomly called with __/love__
 
### /type
shows an embed and dropdown to choose certain character types from
* has no ultimate use as it is not saved
