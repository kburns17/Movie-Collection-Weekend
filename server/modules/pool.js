const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: //must be named,
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}

const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('postgresql connected!');
});

pool.on('error', (err, client) => {
    console.log('error on postresql', err);
    process.exit(-1);
});

module.exports = pool;