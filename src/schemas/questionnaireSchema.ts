
import { z } from "zod";

export const questionnaireSchema = z.object({
  // Site Foundations
  businessName: z.string().optional(),
  businessDescription: z.string().optional(),
  targetAudience: z.string().optional(),
  primaryGoals: z.array(z.string()).optional(),
  brandPersonality: z.array(z.string()).optional(),
  existingWebsite: z.string().optional(),
  preferredStyle: z.string().optional(),
  
  // Content Strategy
  contentTopics: z.array(z.string()).optional(),
  contentFormats: z.array(z.string()).optional(),
  publishingFrequency: z.string().optional(),
  seoGoals: z.array(z.string()).optional(),
  existingContent: z.string().optional(),
  contentChallenges: z.array(z.string()).optional(),
  
  // Course Planning
  courseTopics: z.array(z.string()).optional(),
  targetSkillLevels: z.array(z.string()).optional(),
  courseFormats: z.array(z.string()).optional(),
  courseDuration: z.string().optional(),
  pricingModel: z.string().optional(),
  deliveryMethod: z.array(z.string()).optional(),
  technicalSetup: z.string().optional(),
  courseGoals: z.array(z.string()).optional(),
});

export type QuestionnaireFormData = z.infer<typeof questionnaireSchema>;
