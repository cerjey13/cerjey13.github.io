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
exports.ProductsController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var products_service_1 = require("./products.service");
var create_product_dto_1 = require("./dto/create-product.dto");
var create_product_postgres_dto_1 = require("./dto/create-product-postgres.dto");
var update_product_dto_1 = require("./dto/update-product.dto");
var mongo_id_pipe_1 = require("../common/pipe/mongo-id.pipe");
var filter_dto_1 = require("../common/dto/filter.dto");
var update_product_dto_copy_1 = require("./dto/update-product.dto copy");
var ProductsController = /** @class */ (function () {
    function ProductsController(productsService) {
        this.productsService = productsService;
    }
    ProductsController.prototype.getAll = function (params) {
        return this.productsService.findAll(params);
    };
    ProductsController.prototype.getAllPostgres = function () {
        return this.productsService.findAllPostgres();
    };
    ProductsController.prototype.getOne = function (productId) {
        return this.productsService.findOne(productId);
    };
    ProductsController.prototype.getOnePostgres = function (productId) {
        return this.productsService.findOnePostgres(productId);
    };
    ProductsController.prototype.create = function (payload) {
        return this.productsService.create(payload);
    };
    ProductsController.prototype.createPostgres = function (createProductDto) {
        return this.productsService.createPostgres(createProductDto);
    };
    ProductsController.prototype.update = function (productId, payload) {
        return this.productsService.update(productId, payload);
    };
    ProductsController.prototype.updatePostgres = function (productId, updateProductDto) {
        return this.productsService.updatePostgres(productId, updateProductDto);
    };
    ProductsController.prototype.remove = function (productId) {
        return this.productsService.remove(productId);
    };
    ProductsController.prototype.removePostgres = function (productId) {
        return this.productsService.removePostgres(productId);
    };
    __decorate([
        common_1.Get(),
        openapi.ApiResponse({ status: 200, type: [Object] }),
        __param(0, common_1.Query()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [filter_dto_1.FilterDto]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "getAll", null);
    __decorate([
        common_1.Get('postgres'),
        openapi.ApiResponse({ status: 200, type: [require("./entities/product-postgres.entity").Productp] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "getAllPostgres", null);
    __decorate([
        common_1.Get(':productId'),
        common_1.HttpCode(common_1.HttpStatus.ACCEPTED),
        openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: Object }),
        __param(0, common_1.Param('productId', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "getOne", null);
    __decorate([
        common_1.Get('postgres/:productId'),
        openapi.ApiResponse({ status: 200, type: require("./entities/product-postgres.entity").Productp }),
        __param(0, common_1.Param('productId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "getOnePostgres", null);
    __decorate([
        common_1.Post(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "create", null);
    __decorate([
        common_1.Post('postgres'),
        openapi.ApiResponse({ status: 201, type: require("./entities/product-postgres.entity").Productp }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_product_postgres_dto_1.PostgresCreateProductDto]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "createPostgres", null);
    __decorate([
        common_1.Put(':productId'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('productId', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "update", null);
    __decorate([
        common_1.Put('postgres/:productId'),
        openapi.ApiResponse({ status: 200, type: require("./entities/product-postgres.entity").Productp }),
        __param(0, common_1.Param('productId')),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, update_product_dto_copy_1.PostgresUpdateProductDto]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "updatePostgres", null);
    __decorate([
        common_1.Delete(':productId'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('productId', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "remove", null);
    __decorate([
        common_1.Delete('postgres/:productId'),
        openapi.ApiResponse({ status: 200 }),
        __param(0, common_1.Param('productId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ProductsController.prototype, "removePostgres", null);
    ProductsController = __decorate([
        swagger_1.ApiTags('products'),
        common_1.Controller('products'),
        __metadata("design:paramtypes", [products_service_1.ProductsService])
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map