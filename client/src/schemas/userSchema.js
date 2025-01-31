import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),

  lastName: z.string().min(1, { message: "Last Name is required" }),

  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Invalid email",
  }),

  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),

  province: z.string().min(1, { message: "Province is required" }),

  password: z.string().min(1, { message: "Password is required" }).min(6, {
    message: "Password must be at least 6 characters",
  }),

  confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),    
})

.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Invalid email",
  }),

  password: z.string().min(1, { message: "Password is required" })
});

