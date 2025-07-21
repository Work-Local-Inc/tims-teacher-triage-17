
export interface QuestionnaireData {
  // Site Foundations
  businessName: string;
  businessDescription: string;
  targetAudience: string;
  primaryGoals: string[];
  brandPersonality: string[];
  existingWebsite: string;
  preferredStyle: string;
  budget: string;
  timeline: string;
  
  // Content Strategy
  contentTopics: string[];
  contentFormats: string[];
  publishingFrequency: string;
  seoGoals: string[];
  existingContent: string;
  contentChallenges: string[];
  
  // Course Planning
  courseTopics: string[];
  targetSkillLevels: string[];
  courseFormats: string[];
  courseDuration: string;
  pricingModel: string;
  deliveryMethod: string[];
  technicalSetup: string;
  courseGoals: string[];
}

export interface BuildPlan {
  siteFoundations: {
    priority: 'high' | 'medium' | 'low';
    recommendations: string[];
    timeline: string;
  };
  contentStrategy: {
    priority: 'high' | 'medium' | 'low';
    recommendations: string[];
    timeline: string;
  };
  coursePlanning: {
    priority: 'high' | 'medium' | 'low';
    recommendations: string[];
    timeline: string;
  };
  nextSteps: string[];
}

export interface QuestionnaireStep {
  id: string;
  title: string;
  description: string;
  fields: string[];
}
