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
exports.Productp = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var Productp = /** @class */ (function () {
    function Productp() {
    }
    Productp._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, name: { required: true, type: function () { return String; } }, description: { required: true, type: function () { return String; } }, price: { required: true, type: function () { return Number; } }, stock: { required: true, type: function () { return Number; } }, image: { required: true, type: function () { return String; } } };
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Productp.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar', length: 255, unique: true }),
        __metadata("design:type", String)
    ], Productp.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: 'text' }),
        __metadata("design:type", String)
    ], Productp.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({ type: 'int' }),
        __metadata("design:type", Number)
    ], Productp.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column({ type: 'int' }),
        __metadata("design:type", Number)
    ], Productp.prototype, "stock", void 0);
    __decorate([
        typeorm_1.Column({ type: 'varchar' }),
        __metadata("design:type", String)
    ], Productp.prototype, "image", void 0);
    Productp = __decorate([
        typeorm_1.Entity()
    ], Productp);
    return Productp;
}());
exports.Productp = Productp;
//# sourceMappingURL=product-postgres.entity.js.map