const Sequelize = require("sequelize");
const database = require('./index');

const TableHeader = database.sequelize.define(
	"table_header",
  	{
	name: Sequelize.STRING,
	description: Sequelize.STRING,
  	},
  	{
    // createdAt, updatedAtを自動的に入れないようにする
	timestamps: false,
	freezeTableName: true,
  	}
);

module.exports = TableHeader;