const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});
console.log("hello");
pgclient.connect();

console.log(pgclient.connect());

pgclient.query('SELECT NOW()', (err, res) => {
    if (err) throw err
    console.log(res)
    pgclient.end()
});

console.log("at the end")