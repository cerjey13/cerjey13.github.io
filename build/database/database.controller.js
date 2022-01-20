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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var database_service_1 = require("./database.service");
var DatabaseController = /** @class */ (function () {
    function DatabaseController(databaseService) {
        this.databaseService = databaseService;
    }
    DatabaseController = __decorate([
        common_1.Controller('database'),
        __metadata("design:paramtypes", [database_service_1.DatabaseService])
    ], DatabaseController);
    return DatabaseController;
}());
exports.DatabaseController = DatabaseController;
//# sourceMappingURL=database.controller.js.map