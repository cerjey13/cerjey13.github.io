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
exports.UsersController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var users_service_1 = require("./users.service");
var create_user_dto_1 = require("./dto/create-user.dto");
var update_user_dto_1 = require("./dto/update-user.dto");
var mongo_id_pipe_1 = require("../../../../../src/common/pipe/mongo-id.pipe");
var UsersController = /** @class */ (function () {
    function UsersController(usersService) {
        this.usersService = usersService;
    }
    UsersController.prototype.create = function (createUserDto) {
        return this.usersService.create(createUserDto);
    };
    UsersController.prototype.findAll = function () {
        return this.usersService.findAll();
    };
    UsersController.prototype.findOne = function (id) {
        return this.usersService.findOne(id);
    };
    UsersController.prototype.findOrders = function (id) {
        return this.usersService.getOrders(id);
    };
    UsersController.prototype.update = function (id, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    };
    UsersController.prototype.remove = function (id) {
        return this.usersService.remove(id);
    };
    __decorate([
        common_1.Post(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "create", null);
    __decorate([
        common_1.Get(),
        swagger_1.ApiOperation({ summary: 'List of users' }),
        openapi.ApiResponse({ status: 200, type: [Object] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "findAll", null);
    __decorate([
        common_1.Get(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "findOne", null);
    __decorate([
        common_1.Get(':id/orders'),
        openapi.ApiResponse({ status: 200 }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "findOrders", null);
    __decorate([
        common_1.Put(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UsersController.prototype, "remove", null);
    UsersController = __decorate([
        swagger_1.ApiTags('users'),
        common_1.Controller('users'),
        __metadata("design:paramtypes", [users_service_1.UsersService])
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map