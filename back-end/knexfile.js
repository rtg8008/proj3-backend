// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'db',
      password: 'docker',
      user: 'postgres', //default postgres user
      port: 5432,
      database: 'weg_database' // expected database name to be created
    }
  },
  test: {
    client: 'postgresql',
    connection: {
      host: 'db',
      password: 'docker',
      user: 'postgres', //default postgres user
      port: 5432,
      database: 'weg_database' // expected database name to be created
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
