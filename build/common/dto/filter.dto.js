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
exports.FilterDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var FilterDto = /** @class */ (function () {
    function FilterDto() {
    }
    FilterDto._OPENAPI_METADATA_FACTORY = function () {
        return { limit: { required: true, type: function () { return Number; } }, offset: { required: true, type: function () { return Number; }, minimum: 0 }, minPrice: { required: true, type: function () { return Number; }, minimum: 0 }, maxPrice: { required: true, type: function () { return Number; } } };
    };
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsPositive(),
        __metadata("design:type", Number)
    ], FilterDto.prototype, "limit", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.Min(0),
        __metadata("design:type", Number)
    ], FilterDto.prototype, "offset", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.Min(0),
        __metadata("design:type", Number)
    ], FilterDto.prototype, "minPrice", void 0);
    __decorate([
        class_validator_1.IsPositive(),
        class_validator_1.ValidateIf(function (params) { return params.minPrice; }),
        __metadata("design:type", Number)
    ], FilterDto.prototype, "maxPrice", void 0);
    return FilterDto;
}());
exports.FilterDto = FilterDto;
//# sourceMappingURL=filter.dto.js.map