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
exports.PostgresUpdateProductDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var create_product_postgres_dto_1 = require("./create-product-postgres.dto");
var PostgresUpdateProductDto = /** @class */ (function (_super) {
    __extends(PostgresUpdateProductDto, _super);
    function PostgresUpdateProductDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostgresUpdateProductDto;
}(swagger_1.PartialType(create_product_postgres_dto_1.PostgresCreateProductDto)));
exports.PostgresUpdateProductDto = PostgresUpdateProductDto;
//# sourceMappingURL=update-product.dto%20copy.js.map