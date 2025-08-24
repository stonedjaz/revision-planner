import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().min(1),
  color: z.string().min(1),
});

export const topicSchema = z.object({
  subjectId: z.number(),
  title: z.string().min(1),
  priority: z.number().optional(),
  completed: z.boolean().optional(),
});

export const sessionSchema = z.object({
  topicId: z.number(),
  scheduledAt: z.string().datetime(),
  durationMinutes: z.number().int().positive(),
});
