import 'express-session';   

declare module 'express-session' {
  interface Session {
    userId?: string | null;
    formData?: { [key: string]: any } | null; // Allows storing form data  
  }
}