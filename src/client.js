const { Client } = require('pg');
const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

pgclient.connect((err) => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected successfully to PostgreSQL database');
        // Proceed with the query only if the connection was successful
        pgclient.query('SELECT NOW()', (err, res) => {
            if (err) {
                console.error('Query error', err);
            } else {
                console.log('Query result:', res.rows);
            }
            pgclient.end(); // Make sure to close the connection after the query
        });
    }
});
