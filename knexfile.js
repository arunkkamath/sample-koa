const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost:5432/koa_api',
        migrations: {
            directory: path.join(BASE_PATH, 'migrations')
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    },
    preprod: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: path.join(BASE_PATH, 'migrations')
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    }
};