module.exports = process.end.DATABASE_URL || {
  host: process.env.DB_HOST || `localhost`,
  port: process.env.DB_PORT || `5432`,
  database: process.env.DB_NAME || `#`,
  username: `stefischer`,
  password: `s0711997`,
};
