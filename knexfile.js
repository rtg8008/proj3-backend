// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     host: 'db',
  //     password: 'docker',
  //     user: 'postgres', //default postgres user
  //     port: 5432,
  //     database: 'weg_database' // expected database name to be created
  //   }
  // },
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
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
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL
      ,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

};
