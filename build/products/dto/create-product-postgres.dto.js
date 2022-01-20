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
exports.PostgresCreateProductDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var PostgresCreateProductDto = /** @class */ (function () {
    function PostgresCreateProductDto() {
    }
    PostgresCreateProductDto._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: true, type: function () { return String; } }, description: { required: true, type: function () { return String; } }, price: { required: true, type: function () { return Number; } }, stock: { required: true, type: function () { return Number; } }, image: { required: true, type: function () { return String; } } };
    };
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], PostgresCreateProductDto.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], PostgresCreateProductDto.prototype, "description", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsPositive(),
        swagger_1.ApiProperty(),
        __metadata("design:type", Number)
    ], PostgresCreateProductDto.prototype, "price", void 0);
    __decorate([
        class_validator_1.IsNumber(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsPositive(),
        swagger_1.ApiProperty(),
        __metadata("design:type", Number)
    ], PostgresCreateProductDto.prototype, "stock", void 0);
    __decorate([
        class_validator_1.IsUrl(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], PostgresCreateProductDto.prototype, "image", void 0);
    return PostgresCreateProductDto;
}());
exports.PostgresCreateProductDto = PostgresCreateProductDto;
//# sourceMappingURL=create-product-postgres.dto.js.map