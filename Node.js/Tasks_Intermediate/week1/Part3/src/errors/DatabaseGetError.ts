export class DatabaseGetError extends Error {
    StatusCode = 500;
    constructor(public message: string){
        super(message);
        // https://stackoverflow.com/questions/41102060/typescript-extending-error-class
        Object.setPrototypeOf(this, DatabaseGetError.prototype);
    }
}