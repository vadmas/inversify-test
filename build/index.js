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
exports.Main = void 0;
var dictionaries_1 = require("./classes/dictionaries");
var inversify_1 = require("inversify");
var types_1 = require("./classes/types");
var Main = exports.Main = /** @class */ (function () {
    function Main(dictionaries) {
        var _this = this;
        this.dictionaries = dictionaries;
        this.mainMethod = function () {
            var _a;
            return (_a = _this.dictionaries) === null || _a === void 0 ? void 0 : _a.getData();
        };
    }
    Main = __decorate([
        __param(0, (0, inversify_1.inject)(types_1.TYPES.Dictionaries)),
        __metadata("design:paramtypes", [dictionaries_1.Dictionaries])
    ], Main);
    return Main;
}());
var main = new Main();
console.log(main.mainMethod());
//export const inject = new Injectable();
//inject.getDictionary("dictionaries");
