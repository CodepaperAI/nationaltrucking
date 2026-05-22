import { z } from 'zod';

export const preferredClassOptions = ['Class A', 'Class B', 'Not sure yet'] as const;
export const fundingOptions = ['Self-pay', 'Installment payment plan', 'Agency/voucher paperwork', 'Not sure yet', 'Other'] as const;
export const bestTimeOptions = ['Morning', 'Afternoon', 'Evening', 'Weekend'] as const;

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z
    .string()
    .min(10, 'Please enter a phone number.')
    .regex(/^[+()\-\s\d.]+$/, 'Please enter a valid phone number.'),
  preferredClass: z.enum(preferredClassOptions),
  funding: z.enum(fundingOptions),
  bestTime: z.enum(bestTimeOptions),
  message: z.string().max(1000, 'Please keep the message under 1,000 characters.').optional(),
  company: z.string().optional()
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
