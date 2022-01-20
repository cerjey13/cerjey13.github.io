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
exports.CreateCustomerDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var CreateCustomerDto = /** @class */ (function () {
    function CreateCustomerDto() {
    }
    CreateCustomerDto._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: true, type: function () { return String; } }, lastname: { required: true, type: function () { return String; } }, phone: { required: true, type: function () { return String; } }, skills: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateCustomerDto.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateCustomerDto.prototype, "lastname", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateCustomerDto.prototype, "phone", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsArray(),
        __metadata("design:type", Object)
    ], CreateCustomerDto.prototype, "skills", void 0);
    return CreateCustomerDto;
}());
exports.CreateCustomerDto = CreateCustomerDto;
//# sourceMappingURL=create-customer.dto.js.map