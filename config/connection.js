const pgp = require(`pg-promise`)();
const dbconfig = require(`../config/dbconfig`);

module.exports = pgp(dbconfig);
