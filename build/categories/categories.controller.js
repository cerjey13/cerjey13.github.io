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
exports.CategoriesController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var mongo_id_pipe_1 = require("../../../../../src/common/pipe/mongo-id.pipe");
var categories_service_1 = require("./categories.service");
var create_category_dto_1 = require("./dto/create-category.dto");
var update_category_dto_1 = require("./dto/update-category.dto");
var CategoriesController = /** @class */ (function () {
    function CategoriesController(categoriesService) {
        this.categoriesService = categoriesService;
    }
    CategoriesController.prototype.create = function (createCategoryDto) {
        return this.categoriesService.create(createCategoryDto);
    };
    CategoriesController.prototype.getAll = function () {
        return this.categoriesService.findAll();
    };
    CategoriesController.prototype.getCategory = function (productId, id) {
        return { mensaje: "product " + productId + " and " + id };
    };
    CategoriesController.prototype.findOne = function (id) {
        return this.categoriesService.findOne(id);
    };
    CategoriesController.prototype.update = function (id, updateCategoryDto) {
        return this.categoriesService.update(id, updateCategoryDto);
    };
    CategoriesController.prototype.remove = function (id) {
        return this.categoriesService.remove(id);
    };
    __decorate([
        common_1.Post(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "create", null);
    __decorate([
        common_1.Get(),
        openapi.ApiResponse({ status: 200, type: [Object] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "getAll", null);
    __decorate([
        common_1.Get(':id/products/:productId'),
        openapi.ApiResponse({ status: 200 }),
        __param(0, common_1.Param('productId', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "getCategory", null);
    __decorate([
        common_1.Get(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "findOne", null);
    __decorate([
        common_1.Put(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], CategoriesController.prototype, "remove", null);
    CategoriesController = __decorate([
        swagger_1.ApiTags('categories'),
        common_1.Controller('categories'),
        __metadata("design:paramtypes", [categories_service_1.CategoriesService])
    ], CategoriesController);
    return CategoriesController;
}());
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map