import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short').max(100),
  email: z.email('Invalid email'),
  message: z.string().min(10, 'Message too short').max(2000),
  turnstileToken: z.string().min(1, 'Missing captcha'),
});

export type ContactInput = z.infer<typeof contactSchema>;
