const { users } = require('./users');
const table_header = require('./table_header');

// Provide resolver functions for your schema fields
const resolvers = {
	Query: {
		tableHeaders: () => {return table_header.findAll()},
	  	getTableHeader: (parent, args) => {return table_header.findByPk(args.id)},
	},
};

module.exports = resolvers;