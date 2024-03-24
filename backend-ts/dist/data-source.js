"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    dropSchema: false,
    logging: true,
});
exports.dataSource
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
//# sourceMappingURL=data-source.js.map