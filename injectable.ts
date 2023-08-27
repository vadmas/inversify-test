import {Stores} from "./models/stores";
import {Dictionaries} from "./classes/dictionaries";
import 'reflect-metadata'

export class Injectable{
    readonly instances: Stores = {
        dictionaries: Dictionaries
    };

    readonly contexts: Stores = {

    } as Stores;

    getDictionary = (dictionaryName: keyof Stores) => {
        if(!this.contexts[dictionaryName]){
            const StoreInstance = this.instances[dictionaryName];
            const depsNames = Reflect.getMetadata('design:paramtypes', Dictionaries);
            debugger;
            console.log("StoreInstance", StoreInstance)
            console.log("depsNames", depsNames)
            console.log("prototype", Object.getPrototypeOf(StoreInstance).constructor)
            //const store = new StoreInstance();
        }
    }
}

export function CustomBehavior() {
    return function(ctor: Function) {
        const types = Reflect.getMetadata('design:paramtypes', ctor);
        console.log("types[0].name", types[0].name, types[0])
    }
}