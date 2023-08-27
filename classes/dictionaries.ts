import {injectable} from "inversify";

export interface IDictionaries {
    getData: () => number
}

@injectable()
export class Dictionaries implements IDictionaries{
    counter = 1;
    constructor() {
        console.log("start_Dictionaries")
        this.counter = 3;
    }

    getData = () => {
        const count = this.counter
        this.counter = count + 1;
        return count;
    }
}