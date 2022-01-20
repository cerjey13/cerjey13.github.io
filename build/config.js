"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('config', function () {
    return {
        database: {
            user: process.env.MONGO_INITDB_ROOT_USERNAME,
            pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
            dbPort: process.env.MONGO_PORT,
            host: process.env.MONGO_HOST,
            connection: process.env.MONGO_CONNECTION,
            dbName: process.env.MONGO_DB,
        },
        postgres: {
            user: process.env.POSTGRES_USER,
            pass: process.env.POSTGRES_PASSWORD,
            dbName: process.env.POSTGRES_DB,
            host: process.env.POSTGRES_HOST,
            dbPort: parseInt(process.env.POSTGRES_PORT),
        },
        port: process.env.PORT,
    };
});
//# sourceMappingURL=config.js.map