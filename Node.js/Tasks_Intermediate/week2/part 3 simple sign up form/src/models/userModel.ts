import {z} from 'zod';

export const userSchema = z.object({
    fullName: z.string().regex(/^[A-Za-z\s]+$/, 'Full Name must not contain numbers'),
    email: z.string().email('Invalid Email Address'),
    password: z.string()
        .min(8, 'Password must be at least 8 characters long')
        .max(64, 'Password must be at most 64 character long')
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/,'Password must contain at least one number, one uppercase letter, and one lowercase letter'),
    confirmPassword: z.string(), 
}).refine(data => data.password === data.confirmPassword,{
    message: 'Passwords do not match',
    path: ['confirmedPassword'], 
});

export type UserInput = z.infer<typeof userSchema>;