export class Sample {
    /**
     * id
     */
    public id: string;
    public joke: string;
    public categories: Array<string>;
    constructor(_id: string, _joke: string, _cate: Array<string>) {
        this.id = _id;
        this.joke = _joke;
        this.categories = _cate;
    }
}