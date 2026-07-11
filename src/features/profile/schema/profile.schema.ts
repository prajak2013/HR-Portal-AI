import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "First name is required"),

  lastName: z.string().min(2),

  email: z.string().email(),

  phone: z.string().min(10),

  department: z.string(),

  designation: z.string(),

  emergencyName: z.string(),

  emergencyPhone: z.string(),

  relationship: z.string(),
});

export type ProfileFormValues =
  z.infer<typeof profileSchema>;