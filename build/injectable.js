"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBehavior = exports.Injectable = void 0;
var dictionaries_1 = require("./classes/dictionaries");
require("reflect-metadata");
var Injectable = /** @class */ (function () {
    function Injectable() {
        var _this = this;
        this.instances = {
            dictionaries: dictionaries_1.Dictionaries
        };
        this.contexts = {};
        this.getDictionary = function (dictionaryName) {
            if (!_this.contexts[dictionaryName]) {
                var StoreInstance = _this.instances[dictionaryName];
                var depsNames = Reflect.getMetadata('design:paramtypes', dictionaries_1.Dictionaries);
                debugger;
                console.log("StoreInstance", StoreInstance);
                console.log("depsNames", depsNames);
                console.log("prototype", Object.getPrototypeOf(StoreInstance).constructor);
                //const store = new StoreInstance();
            }
        };
    }
    return Injectable;
}());
exports.Injectable = Injectable;
function CustomBehavior() {
    return function (ctor) {
        var types = Reflect.getMetadata('design:paramtypes', ctor);
        console.log("types[0].name", types[0].name, types[0]);
    };
}
exports.CustomBehavior = CustomBehavior;
