import "reflect-metadata";
import {Dictionaries, IDictionaries} from "./classes/dictionaries";
import {TYPES} from "./classes/types";
import { Container, injectable, inject } from "inversify";
import getDecorators from "inversify-inject-decorators";

const container = new Container();

container.bind(TYPES.Dictionaries).to(Dictionaries).inSingletonScope();

@injectable()
export class Main{
    constructor(@inject(TYPES.Dictionaries) private readonly dictionaries: Dictionaries) {
        console.log("start_Main");
    }

    mainMethod = () => {
        return this.dictionaries.getData()
    }
}

@injectable()
export class Second{
    constructor(@inject(TYPES.Dictionaries) private readonly dictionaries: Dictionaries) {
        console.log("start_Second");
    }
    //@lazyInject(TYPES.Dictionaries) dictionaries: IDictionaries;

    mainMethod = () => {
        return this.dictionaries.getData()
    }
}
container.bind(Second).toSelf().inSingletonScope();
container.bind(Main).toSelf().inSingletonScope();

const main = container.get(Main);
const sec = container.get(Second);
const sec2 = container.get(Second);

console.log(main.mainMethod())
console.log(sec.mainMethod())
console.log(sec2.mainMethod())

//export const inject = new Injectable();
//inject.getDictionary("dictionaries");