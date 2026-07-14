import { z } from "zod";

export const leaveSchema = z.object({
  leaveType: z.string().min(1, "Leave type is required"),

  startDate: z.string().min(1, "Start date is required"),

  endDate: z.string().min(1, "End date is required"),

  reason: z
    .string()
    .min(5, "Reason must be at least 5 characters"),
});

export type LeaveFormValues =
  z.infer<typeof leaveSchema>;