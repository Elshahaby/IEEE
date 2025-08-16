```ts
class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // Mark as operational errors (expected errors)

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
```

<br>

### `isOperational` Field
**What it is:**
The `isOperational` field is a custom property you've added to your `AppError` class, initialized to `true`. It's a flag that helps you distinguish between different types of errors in your application:

**1. Operational Errors (`isOperational: true`):** These are predictable errors that occur during the normal operation of your application due to external factors or expected conditions. They represent problems that your code can anticipate and handle gracefully.
- **Examples:**
    - Invalid user input (validation errors).
    - Resource not found (e.g., trying to fetch a book by a non-existent ID).
    - Unauthorized access.
    - Network issues when connecting to an external API.
    - Duplicate key errors in the database.
- **How you handle them:** For operational errors, you typically want to send a client-friendly error message and an appropriate HTTP status code (e.g., 400 Bad Request, 404 Not Found, 401 Unauthorized, 403 Forbidden). You generally don't need to restart the application or send an alert to your engineering team.

**2. Programming Errors (isOperational: false or not set):** These are unpredictable, often catastrophic errors that indicate a bug in your code. They represent problems that your code did not anticipate or handle.
- **Examples:**
    - Trying to access a property of undefined.
    - Syntax errors (though these usually crash the app before runtime).
    - Logic bugs (e.g., an infinite loop).
    - Errors thrown by third-party libraries due to incorrect usage.
- **How you handle them:**
    - Log the full error stack trace for debugging.
    - Notify your development team
    - Restart the application (if it's a critical process) to ensure stability, though this needs to be done carefully (e.g., using a process manager like PM2).
    - Send a generic 500 Internal Server Error to the client to avoid leaking sensitive information.

<br>

**What it's doing and why it's useful:** <br>
By setting `isOperational: true` in your `AppError` constructor, you're explicitly marking every instance of `AppError` as an error that the application can recover from and for which it can provide a meaningful response to the client.

In your global error handling middleware, you can then differentiate:
```ts
// In your global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // ... (handle ZodError, Prisma errors) ...

  if (err.isOperational) { // Check for operational errors
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else { // This is a programming error
    console.error('UNHANDLED PROGRAMMING ERROR 💥:', err); // Log full error for debugging
    // Send a generic error response to the client
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: 'Something went very wrong!', // Generic message for clients
    });
  }
  // For production, you might also send alerts here for programming errors.
});
```

This distinction allows you to:
- **Provide better user experience:** Clients get clear messages for anticipated problems.
- **Improve debugging:** You immediately know if an error signifies a fundamental bug (programming error) or an expected scenario (operational error).
- **Enhance monitoring:** You can configure monitoring tools to prioritize alerts for programming errors, while treating operational errors as lower priority or simply logging them.
- **Control information leakage:** You can choose to expose more details for operational errors to clients (e.g., validation error specifics) but always hide sensitive stack traces for programming errors in production.

---

<br>

### `Error.captureStackTrace(this, this.constructor)`

**What it is and how it works:** <br>
`Error.captureStackTrace` is a V8 JavaScript engine (used by Node.js and Chrome) specific method that is not part of the standard ECMAScript specification.
- `this:` Refers to the current instance of your `AppError` class. This is the object onto which the stack trace will be added.
- `this.constructor:` Refers to the `AppError` constructor function itself. This argument tells `captureStackTrace` where to "stop" capturing the stack trace. It essentially removes the frames from the stack trace that are related to the `AppError` constructor call itself, making the stack trace cleaner and more relevant to where the error was actually created/thrown.

When you call `new AppError(...)`, the JavaScript engine usually creates a stack trace automatically when the `Error` object is instantiated. However, that stack trace often includes the internal calls within the `Error` constructor and your `AppError` constructor. <br>

`Error.captureStackTrace` allows you to:
1. **Explicitly control stack trace generation:** Ensure a stack trace is captured even if it might not be by default in some contexts.
2. **Clean up the stack trace:** By providing `this.constructor` as the second argument, you instruct V8 to start the stack trace from the point after the `AppError` constructor was called. This makes the stack trace much more useful as it directly points to the line of code that `new AppError(...)` was invoked, rather than showing internal details of your error class.

**Example of cleaned stack trace:**

Without `Error.captureStackTrace(this, this.constructor):`
```
Error: No book found with that ID
    at AppError.constructor (path/to/appError.ts:10:5) // <-- You don't usually care about this line
    at BookService.getBookById (path/to/book.service.ts:20:15)
    at BookController.getBook (path/to/book.controller.ts:15:20)
    at Layer.handle [as handle_request] (node_modules/express/lib/router/layer.js:95:5)
    // ... more express internal stack
```

With `Error.captureStackTrace(this, this.constructor):`
```
Error: No book found with that ID
    at BookService.getBookById (path/to/book.service.ts:20:15) // <-- Starts here, directly showing where the AppError was thrown
    at BookController.getBook (path/to/book.controller.ts:15:20)
    at Layer.handle [as handle_request] (node_modules/express/lib/router/layer.js:95:5)
    // ... more express internal stack
```

<br>

**Why it's useful:**
- `Improved Debugging:` A cleaner, more precise stack trace helps you quickly identify the exact line of code where the error condition originated in your application logic.
- `Readability:` It removes noise from the stack trace, focusing on the relevant parts of your code.

<br>

**Should you use it in development or in both dev and production?**

You should definitely use `Error.captureStackTrace` in both development and production.

- **Development:** It's invaluable for debugging.
- **Production:** Even if you don't send the full stack trace to the client in production (which you shouldn't for security reasons), you will want to log the full stack trace on your server for programming errors. A clean and accurate stack trace from Error.captureStackTrace makes your production logs much more useful for post-mortem analysis and bug fixing.