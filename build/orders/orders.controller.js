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
exports.OrdersController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var orders_service_1 = require("./orders.service");
var create_order_dto_1 = require("./dto/create-order.dto");
var update_order_dto_1 = require("./dto/update-order.dto");
var mongo_id_pipe_1 = require("../../../../../src/common/pipe/mongo-id.pipe");
var add_products_to_order_dto_1 = require("./dto/add-products-to-order.dto");
var OrdersController = /** @class */ (function () {
    function OrdersController(ordersService) {
        this.ordersService = ordersService;
    }
    OrdersController.prototype.create = function (createOrderDto) {
        return this.ordersService.create(createOrderDto);
    };
    OrdersController.prototype.findAll = function () {
        return this.ordersService.findAll();
    };
    OrdersController.prototype.findOne = function (id) {
        return this.ordersService.findOne(id);
    };
    OrdersController.prototype.update = function (id, updateOrderDto) {
        return this.ordersService.update(id, updateOrderDto);
    };
    OrdersController.prototype.addProducts = function (id, addProductsToOrderDto) {
        return this.ordersService.addProducts(id, addProductsToOrderDto.productsIds);
    };
    OrdersController.prototype.remove = function (id) {
        return this.ordersService.remove(id);
    };
    OrdersController.prototype.removeProduct = function (id, productId) {
        return this.ordersService.removeProduct(id, productId);
    };
    __decorate([
        common_1.Post(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
        __metadata("design:returntype", void 0)
    ], OrdersController.prototype, "create", null);
    __decorate([
        common_1.Get(),
        openapi.ApiResponse({ status: 200, type: [Object] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrdersController.prototype, "findAll", null);
    __decorate([
        common_1.Get(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], OrdersController.prototype, "findOne", null);
    __decorate([
        common_1.Put(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_order_dto_1.UpdateOrderDto]),
        __metadata("design:returntype", void 0)
    ], OrdersController.prototype, "update", null);
    __decorate([
        common_1.Put(':id/products'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, add_products_to_order_dto_1.AddProductsToOrderDto]),
        __metadata("design:returntype", void 0)
    ], OrdersController.prototype, "addProducts", null);
    __decorate([
        common_1.Delete(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], OrdersController.prototype, "remove", null);
    __decorate([
        common_1.Delete(':id/products/:productId'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Param('productId', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], OrdersController.prototype, "removeProduct", null);
    OrdersController = __decorate([
        swagger_1.ApiTags('orders'),
        common_1.Controller('orders'),
        __metadata("design:paramtypes", [orders_service_1.OrdersService])
    ], OrdersController);
    return OrdersController;
}());
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map