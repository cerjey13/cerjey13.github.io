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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var create_product_dto_1 = require("./create-product.dto");
var UpdateProductDto = /** @class */ (function (_super) {
    __extends(UpdateProductDto, _super);
    function UpdateProductDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateProductDto._OPENAPI_METADATA_FACTORY = function () {
        return { name: { required: false, type: function () { return String; } }, description: { required: false, type: function () { return String; } }, price: { required: false, type: function () { return Number; } }, stock: { required: false, type: function () { return Number; } }, image: { required: false, type: function () { return String; } } };
    };
    return UpdateProductDto;
}(swagger_1.PartialType(create_product_dto_1.CreateProductDto)));
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map