export class DatabasePostError extends Error {
    StatusCode = 500;
    constructor(public message: string){
        super(message);
        // https://stackoverflow.com/questions/41102060/typescript-extending-error-class
        Object.setPrototypeOf(this, DatabasePostError.prototype);
    }
}