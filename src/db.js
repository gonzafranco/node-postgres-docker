const { Pool } = require('pg')

const pool = new Pool({
    host: 'postgres',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'presentacionDB'
})

module.exports = pool;