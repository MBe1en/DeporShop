import { z } from "zod";

export const registerSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  lastName: z.string({
    required_error: "Lastname is required",
  }),
  email: z
    .string({
      required_error: "Email is required"
    })
    .email({
      message: "Invalid email",
    }),
  address: z.string({
    required_error: "Address is required",
  }),
  city: z.string({
    required_error: "City is required",
  }),
  province: z.string({
    required_error: "Province is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});
