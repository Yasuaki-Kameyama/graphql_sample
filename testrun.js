//import TableHeader from './models/table_header';
const table_header = require('./models/table_header');

/*
const newa = new table_header({name: 'aaaaa', description: 'aaaa'});
newa.save();
*/
table_header.findAll().then((result) => {
    console.log(result);
});