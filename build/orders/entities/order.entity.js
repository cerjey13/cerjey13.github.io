"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.OrderSchema = exports.Order = void 0;
var openapi = require("@nestjs/swagger");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var customer_entity_1 = require("../../../../../../src/customer/entities/customer.entity");
var product_entity_1 = require("../../../../../../src/products/entities/product.entity");
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Order._OPENAPI_METADATA_FACTORY = function () {
        return { date: { required: true, type: function () { return Date; } }, customer: { required: true, type: function () { return Object; } }, products: { required: true, type: function () { return [Object]; } } };
    };
    var _a;
    __decorate([
        mongoose_1.Prop({ type: Date }),
        __metadata("design:type", Date)
    ], Order.prototype, "date", void 0);
    __decorate([
        mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: customer_entity_1.Customer.name, required: true }),
        __metadata("design:type", Object)
    ], Order.prototype, "customer", void 0);
    __decorate([
        mongoose_1.Prop({ type: [{ type: mongoose_2.Types.ObjectId, ref: product_entity_1.Product.name }] }),
        __metadata("design:type", mongoose_2.Types.Array)
    ], Order.prototype, "products", void 0);
    Order = __decorate([
        mongoose_1.Schema()
    ], Order);
    return Order;
}(mongoose_2.Document));
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.entity.js.map