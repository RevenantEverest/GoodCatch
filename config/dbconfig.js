
module.exports = process.env.DATABASE_URL || {
  host: process.env.DB_HOST || `localhost`,
  port: process.env.DB_PORT || `5432`,
  database: process.env.DB_NAME || `ga_db`,
  username: `stefischer`,
  password: `s07111997`,
};

// const pgp = require(`pg-promise`)();
//
// console.log(`Hello Flat Earth`)
// function setDatabase() {
//   console.log(`Please.db`)
//   if(process.env.NODE_ENV === `development` || process.env.NODE_ENV) {
//     return pgp({
//       database: `ga_db`,
//       port: 5432,
//       host: `localhost`,
//       username: `stefischer`,
//       password: `s07111997`,
//     });
//   } else if (process.env.NODE_ENV === `production`) {
//     return pgp(process.env.DATABASE_URL);
//   }
// }
//
// const db = setDatabase();
//
// module.exports = db;
