import { z } from 'zod';

export const subscribeSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'An Email is required')
    .email('Invalid Email'),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;
