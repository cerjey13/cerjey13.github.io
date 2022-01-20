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
exports.BrandsController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var mongo_id_pipe_1 = require("../../../../../src/common/pipe/mongo-id.pipe");
var swagger_1 = require("@nestjs/swagger");
var brands_service_1 = require("./brands.service");
var create_brand_dto_1 = require("./dto/create-brand.dto");
var update_brand_dto_1 = require("./dto/update-brand.dto");
var BrandsController = /** @class */ (function () {
    function BrandsController(brandsService) {
        this.brandsService = brandsService;
    }
    BrandsController.prototype.create = function (createBrandDto) {
        return this.brandsService.create(createBrandDto);
    };
    BrandsController.prototype.findAll = function () {
        return this.brandsService.findAll();
    };
    BrandsController.prototype.findOne = function (id) {
        return this.brandsService.findOne(id);
    };
    BrandsController.prototype.update = function (id, updateBrandDto) {
        return this.brandsService.update(id, updateBrandDto);
    };
    BrandsController.prototype.remove = function (id) {
        return this.brandsService.remove(id);
    };
    __decorate([
        common_1.Post(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_brand_dto_1.CreateBrandDto]),
        __metadata("design:returntype", void 0)
    ], BrandsController.prototype, "create", null);
    __decorate([
        common_1.Get(),
        openapi.ApiResponse({ status: 200, type: [Object] }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BrandsController.prototype, "findAll", null);
    __decorate([
        common_1.Get(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], BrandsController.prototype, "findOne", null);
    __decorate([
        common_1.Put(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, update_brand_dto_1.UpdateBrandDto]),
        __metadata("design:returntype", void 0)
    ], BrandsController.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, common_1.Param('id', mongo_id_pipe_1.MongoIdPipe)),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], BrandsController.prototype, "remove", null);
    BrandsController = __decorate([
        swagger_1.ApiTags('brands'),
        common_1.Controller('brands'),
        __metadata("design:paramtypes", [brands_service_1.BrandsService])
    ], BrandsController);
    return BrandsController;
}());
exports.BrandsController = BrandsController;
//# sourceMappingURL=brands.controller.js.map