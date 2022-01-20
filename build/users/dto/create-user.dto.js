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
exports.CreateUserDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    CreateUserDto._OPENAPI_METADATA_FACTORY = function () {
        return { email: { required: true, type: function () { return String; } }, password: { required: true, type: function () { return String; } }, role: { required: true, type: function () { return String; } } };
    };
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "password", void 0);
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "role", void 0);
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map