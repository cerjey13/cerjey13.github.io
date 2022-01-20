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
exports.CustomerController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var mongo_id_pipe_1 = require("../../../../../src/common/pipe/mongo-id.pipe");
var customer_service_1 = require("./customer.service");
var create_customer_dto_1 = require("./dto/create-customer.dto");
var update_customer_dto_1 = require("./dto/update-customer.dto");
var CustomerController = /** @class */ (function () {
    function CustomerController(customerService) {
        this.customerService = customerService;
    }
    CustomerController.prototype.create = function (createCustomerDto) {
        return this.customerService.create(createCustomerDto);
    };
    CustomerController.prototype.findAll = function () {
        return this.customerService.findAll();
    };
    CustomerController.prototype.findOne = function (id) {
        return this.customerService.findOne(id);
    };
    CustomerController.prototype.update = function (id, updateCustomerDto) {
        return this.customerService.update(id, updateCustomerDto);
    };
    CustomerController.prototype.remove = function (id) {
        return this.customerService.remove(id);
    };
    __decorate([
        common_1.Post(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
        __metadata("design:returntype", void 0)
    ], CustomerController.prototype, "create", null);
    __decorate([
        common_1.Get(),
        openapi.ApiResponse({ status: 200, type: [Object] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CustomerController.prototype, "findAll", null);
    __decorate([
        common_1.Get(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CustomerController.prototype, "findOne", null);
    __decorate([
        common_1.Put(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_customer_dto_1.UpdateCustomerDto]),
        __metadata("design:returntype", void 0)
    ], CustomerController.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CustomerController.prototype, "remove", null);
    CustomerController = __decorate([
        swagger_1.ApiTags('customer'),
        common_1.Controller('customer'),
        __metadata("design:paramtypes", [customer_service_1.CustomerService])
    ], CustomerController);
    return CustomerController;
}());
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map