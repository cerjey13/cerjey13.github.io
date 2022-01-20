"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var typeorm_1 = require("@nestjs/typeorm");
var database_service_1 = require("./database.service");
var database_controller_1 = require("./database.controller");
var config_1 = require("../../../../../src/config");
var DatabaseModule = /** @class */ (function () {
    function DatabaseModule() {
    }
    DatabaseModule = __decorate([
        common_1.Global(),
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: function (configService) {
                        var _a = configService.postgres, user = _a.user, pass = _a.pass, host = _a.host, dbName = _a.dbName, dbPort = _a.dbPort;
                        return {
                            type: 'postgres',
                            username: user,
                            host: host,
                            database: dbName,
                            port: dbPort,
                            password: pass,
                            synchronize: true,
                            autoLoadEntities: true,
                        };
                    },
                    inject: [config_1.default.KEY],
                }),
                mongoose_1.MongooseModule.forRootAsync({
                    useFactory: function (configService) {
                        var _a = configService.database, dbName = _a.dbName, user = _a.user, pass = _a.pass, host = _a.host, dbPort = _a.dbPort, connection = _a.connection;
                        return {
                            uri: connection + "://" + host + ":" + dbPort,
                            user: user,
                            pass: pass,
                            dbName: dbName,
                        };
                    },
                    inject: [config_1.default.KEY],
                }),
            ],
            controllers: [database_controller_1.DatabaseController],
            providers: [database_service_1.DatabaseService],
            exports: [mongoose_1.MongooseModule, typeorm_1.TypeOrmModule],
        })
    ], DatabaseModule);
    return DatabaseModule;
}());
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map