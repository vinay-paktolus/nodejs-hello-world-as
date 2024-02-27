const { Client } = require('pg'); 
const pgclient = new Client({
    host: process.env.POSTGRES_HOST, 
    port: process.env.POSTGRES_PORT, 
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
}); 

pgclient.connect();

console.log("here")

pgclient.query('SELECT NOW()', (err, res) => { 
if (err) throw err
console.log(res)
console.log("after")
pgclient.end()
});
console.log("at the end")