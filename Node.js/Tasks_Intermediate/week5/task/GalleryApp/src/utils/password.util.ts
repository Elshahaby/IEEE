import bcrypt from "bcrypt";
import { z } from "zod";

const SALT_ROUNDS = 13;
const passwordSchema = z.string().trim().min(1, "Password must be a non-empty string");

// Function to hash a password
export async function hashPassword(password: string): Promise<string> {
    const validatedPassword = passwordSchema.parse(password);
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(validatedPassword, salt);
}

// Function to validate password
export async function validatePassword(inputPassword: string, hashedPassword: string): Promise<boolean> {
    const validatedPassword = passwordSchema.parse(inputPassword);
    const validatedHash = passwordSchema.parse(hashedPassword);
    return await bcrypt.compare(validatedPassword, validatedHash);
}