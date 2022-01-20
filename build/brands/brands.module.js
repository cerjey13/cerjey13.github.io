"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var brands_service_1 = require("./brands.service");
var brands_controller_1 = require("./brands.controller");
var brand_entity_1 = require("./entities/brand.entity");
var BrandsModule = /** @class */ (function () {
    function BrandsModule() {
    }
    BrandsModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: brand_entity_1.Brand.name,
                        schema: brand_entity_1.BrandSchema,
                    },
                ]),
            ],
            controllers: [brands_controller_1.BrandsController],
            providers: [brands_service_1.BrandsService],
        })
    ], BrandsModule);
    return BrandsModule;
}());
exports.BrandsModule = BrandsModule;
//# sourceMappingURL=brands.module.js.map