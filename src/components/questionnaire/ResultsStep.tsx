
import React from 'react';
import { QuestionnaireFormData } from '@/schemas/questionnaireSchema';
import { BuildPlan } from '@/types/questionnaire';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle, Target, Lightbulb, Zap } from 'lucide-react';

interface ResultsStepProps {
  formData: QuestionnaireFormData;
}

export const ResultsStep = ({ formData }: ResultsStepProps) => {
  // Generate build plan based on form data
  const generateBuildPlan = (data: QuestionnaireFormData): BuildPlan => {
    const plan: BuildPlan = {
      siteFoundations: {
        priority: 'high',
        recommendations: [],
        timeline: '2-4 weeks'
      },
      contentStrategy: {
        priority: 'high',
        recommendations: [],
        timeline: '1-2 weeks'
      },
      coursePlanning: {
        priority: 'medium',
        recommendations: [],
        timeline: '3-6 weeks'
      },
      nextSteps: []
    };

    // Site Foundation recommendations
    if (data.primaryGoals?.includes('Generate leads for courses')) {
      plan.siteFoundations.recommendations.push('Lead capture system with course previews');
    }
    if (data.primaryGoals?.includes('Build brand authority')) {
      plan.siteFoundations.recommendations.push('Professional about page and testimonials section');
    }
    if (data.brandPersonality?.includes('Professional & Expert')) {
      plan.siteFoundations.recommendations.push('Clean, professional design with trust indicators');
    }

    // Content Strategy recommendations
    if (data.publishingFrequency === 'daily' || data.publishingFrequency === '3-times-week') {
      plan.contentStrategy.recommendations.push('Content calendar and batch creation workflow');
    }
    if (data.contentFormats?.includes('Video Tutorials')) {
      plan.contentStrategy.recommendations.push('YouTube integration and video SEO optimization');
    }
    if (data.seoGoals?.includes('Rank for educational keywords')) {
      plan.contentStrategy.recommendations.push('Keyword research and SEO content strategy');
    }

    // Course Planning recommendations
    if (data.pricingModel === 'free-content') {
      plan.coursePlanning.recommendations.push('Freemium funnel with premium course upsells');
    }
    if (data.deliveryMethod?.includes('YouTube videos')) {
      plan.coursePlanning.recommendations.push('YouTube channel optimization and playlist strategy');
    }
    if (data.courseGoals?.includes('Generate passive income')) {
      plan.coursePlanning.recommendations.push('Evergreen course creation and automated sales funnel');
    }

    // Next steps
    plan.nextSteps = [
      'Domain setup and hosting configuration',
      'Brand identity finalization (logo, colors, fonts)',
      'Content audit and repurposing strategy',
      'YouTube channel setup and optimization',
      'Email marketing system implementation'
    ];

    return plan;
  };

  const buildPlan = generateBuildPlan(formData);

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4 text-destructive" />;
      case 'medium': return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Target className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold">Your Personalized Build Plan</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Based on your responses, we've created a comprehensive plan to build your website and YouTube course strategy. 
          Here's what we recommend focusing on first.
        </p>
      </div>

      {/* Quick Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5" />
            <span>Project Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Business Focus</h4>
              <p className="text-sm text-muted-foreground mb-3">{formData.businessDescription}</p>
              <div className="space-y-1">
                <p><strong>Target Audience:</strong> {formData.targetAudience}</p>
                <p><strong>Style Preference:</strong> {formData.preferredStyle?.replace('-', ' & ')}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Key Goals</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.primaryGoals?.slice(0, 3).map((goal, index) => (
                  <Badge key={index} variant="secondary">{goal}</Badge>
                ))}
              </div>
              <h4 className="font-semibold mb-2">Content Focus</h4>
              <div className="flex flex-wrap gap-2">
                {formData.contentTopics?.slice(0, 3).map((topic, index) => (
                  <Badge key={index} variant="outline">{topic}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Build Plan Sections */}
      <div className="grid gap-6">
        {/* Site Foundations */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                {getPriorityIcon(buildPlan.siteFoundations.priority)}
                <span>Site Foundations</span>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant={getPriorityColor(buildPlan.siteFoundations.priority) as any}>
                  {buildPlan.siteFoundations.priority} priority
                </Badge>
                <Badge variant="outline">{buildPlan.siteFoundations.timeline}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {buildPlan.siteFoundations.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{rec}</span>
                </li>
              ))}
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Responsive design optimized for all devices</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Basic SEO setup and analytics integration</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Content Strategy */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                {getPriorityIcon(buildPlan.contentStrategy.priority)}
                <span>Content Strategy</span>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant={getPriorityColor(buildPlan.contentStrategy.priority) as any}>
                  {buildPlan.contentStrategy.priority} priority
                </Badge>
                <Badge variant="outline">{buildPlan.contentStrategy.timeline}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {buildPlan.contentStrategy.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{rec}</span>
                </li>
              ))}
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Content templates for consistent publishing</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Social media integration and sharing tools</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Course Planning */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                {getPriorityIcon(buildPlan.coursePlanning.priority)}
                <span>Course Planning</span>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant={getPriorityColor(buildPlan.coursePlanning.priority) as any}>
                  {buildPlan.coursePlanning.priority} priority
                </Badge>
                <Badge variant="outline">{buildPlan.coursePlanning.timeline}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {buildPlan.coursePlanning.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{rec}</span>
                </li>
              ))}
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Course outline and module structure</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Student engagement and feedback systems</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Next Steps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Immediate Next Steps</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {buildPlan.nextSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-semibold">
                  {index + 1}
                </div>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* JSON Data Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Data Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg text-xs overflow-auto max-h-64">
            {JSON.stringify({ formData, buildPlan }, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};
