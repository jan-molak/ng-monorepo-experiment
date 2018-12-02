export class Person {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
    ) {
    }

    toString() {
        return `${ this.firstName } ${ this.lastName}`;
    }
}
