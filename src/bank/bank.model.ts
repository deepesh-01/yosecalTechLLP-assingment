export class User{
    constructor(
        public id: string,
        public name: string,
        public balance: number,
        public transactions: number,
    ) {}
}