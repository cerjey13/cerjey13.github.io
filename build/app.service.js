"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("./config");
var AppService = /** @class */ (function () {
    function AppService(configService, tasks) {
        this.configService = configService;
        this.tasks = tasks;
    }
    AppService.prototype.getHello = function () {
        return {
            database: this.configService.database.dbName,
            databasePort: this.configService.database.dbPort,
            message: this.tasks,
        };
    };
    AppService = __decorate([
        common_1.Injectable(),
        __param(0, common_1.Inject(config_1.default.KEY)),
        __param(1, common_1.Inject('TASKS')),
        __metadata("design:paramtypes", [void 0, Array])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map