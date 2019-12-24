const Sequelize = require("sequelize");
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'models/testdb.sqlite3',
	query: { raw: true } ,
  });

const database = {};
database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;