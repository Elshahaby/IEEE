## Password Hashing Functions

```typescript

import bcrypt from "bcryptjs";
import { z } from "zod";

const SALT_ROUNDS = 13;
const passwordSchema = z.string().trim().min(1, "Password must be a non-empty string");

// Function to hash a password
export async function hashPassword(password: string): Promise<string> {
    try {
        const validatedPassword = passwordSchema.parse(password);
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        return await bcrypt.hash(validatedPassword, salt);
    } catch (error) {
        console.error("Error hashing password:", error);
        throw new Error("Internal server error");
    }
}

// Function to validate password
export async function validatePassword(inputPassword: string, hashedPassword: string): Promise<boolean> {
    try {
        const validatedPassword = passwordSchema.parse(inputPassword);
        const validatedHash = passwordSchema.parse(hashedPassword);
        return await bcrypt.compare(validatedPassword, validatedHash);
    } catch (error) {
        console.error("Error validating password:", error);
        throw new Error("Internal server error");
    }
}

// test the code 

async function main() {
    try {
        const plainPassword = "SecurePass123!";
        
        // Hash the password
        const hashedPassword = await hashPassword(plainPassword);
        console.log("Hashed Password:", hashedPassword);

        // Validate the password
        const isMatch = await validatePassword(plainPassword, hashedPassword);
        console.log("Password Match:", isMatch);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();

```

<br>

handle :- 

`Type Safty (Checking)`
- Compile-Time Safety: TypeScript warns if an incorrect type is passed.
- Runtime Safety: If an incorrect type is still passed (e.g., from dynamically typed sources like API requests), the function handles it properly by adding zod validation.
