export class DatabaseDeleteError extends Error {
    StatusCode = 500;
    constructor(public message: string){
        super(message);
        Object.setPrototypeOf(this, DatabaseDeleteError.prototype);
    }
}