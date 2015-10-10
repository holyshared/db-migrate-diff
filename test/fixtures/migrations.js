module.exports = {
  development: {
    "driver": "mysql",
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
  },
  test: {
    "driver": "mysql",
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
};
