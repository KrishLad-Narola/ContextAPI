
import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z.string().min(3, "FirstName must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
