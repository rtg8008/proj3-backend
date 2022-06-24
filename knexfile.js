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
      connectionString: process.env.DATABASE_URL || `postgres://hagivgcqjgmsbg:1bd8e665245f4e4f2c9ee5fc63c2b5b0998b39a1d29ac8c956db6a1fdde6a6c3@ec2-44-197-128-108.compute-1.amazonaws.com:5432/d65nmhbo7htq0s`
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
