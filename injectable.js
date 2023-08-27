"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBehavior = exports.Injectable = void 0;
var dictionaries_1 = require("./classes/dictionaries");
require("reflect-metadata");
function objToString(obj) {
    var str = '';
    for (var p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += p + '::' + obj[p] + '\n';
        }
    }
    return str;
}
function getClassContructorParams(obj) {
    var _a;
    var match = (_a = objToString(obj)) === null || _a === void 0 ? void 0 : _a.match(/constructor\((.+)\)/);
    console.log("match ", match);
    if (match && match[1]) {
        return match[1].split(",");
    }
    // If no match
    return [];
}
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
