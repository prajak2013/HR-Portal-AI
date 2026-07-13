import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "First name is required"),

  employeeId: z.string().min(2, "Employee ID is required"),

  lastName: z.string().min(2),

  email: z.string().email(),

  phone: z.string().min(10),

  department: z.string(),

  designation: z.string(),

  // emergencyName: z.string(),

  // emergencyPhone: z.string(),

  // relationship: z.string(),
  emergencyName: z.string().min(2, "Emergency contact name is required"),

  emergencyPhone: z.string().min(10, "Emergency contact number is required"),

  relationship: z.string().min(1, "Relationship is required"),
});

export type ProfileFormValues =
  z.infer<typeof profileSchema>;

