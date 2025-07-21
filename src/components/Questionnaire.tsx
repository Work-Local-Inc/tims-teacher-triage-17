
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { questionnaireSchema, QuestionnaireFormData } from '@/schemas/questionnaireSchema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, Download, FileText, RotateCcw } from 'lucide-react';
import { SiteFoundationsStep } from './questionnaire/SiteFoundationsStep';
import { ContentStrategyStep } from './questionnaire/ContentStrategyStep';
import { CoursePlanningStep } from './questionnaire/CoursePlanningStep';
import { ResultsStep } from './questionnaire/ResultsStep';
import { useToast } from '@/hooks/use-toast';

const steps = [
  { id: 'welcome', title: 'Welcome', description: 'Let\'s get started with your project' },
  { id: 'site-foundations', title: 'Site Foundations', description: 'Tell us about your business and website goals' },
  { id: 'content-strategy', title: 'Content Strategy', description: 'Plan your content approach' },
  { id: 'course-planning', title: 'Course Planning', description: 'Design your YouTube course strategy' },
  { id: 'results', title: 'Your Build Plan', description: 'Review your personalized recommendations' }
];

export const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  const form = useForm<QuestionnaireFormData>({
    resolver: zodResolver(questionnaireSchema),
    mode: 'onChange',
  });

  // Load saved data on component mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('tim-questionnaire-data');
      const savedStep = localStorage.getItem('tim-questionnaire-step');
      
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        form.reset(parsedData);
        console.log('Loaded saved questionnaire data:', parsedData);
      }
      
      if (savedStep) {
        const stepNumber = parseInt(savedStep, 10);
        if (!isNaN(stepNumber) && stepNumber >= 0 && stepNumber < steps.length) {
          setCurrentStep(stepNumber);
          console.log('Restored step position:', stepNumber);
        }
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
      toast({
        title: "Data Recovery Issue",
        description: "There was an issue loading your saved progress. Starting fresh.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [form, toast]);

  const progress = ((currentStep + 1) / steps.length) * 100;

  const nextStep = async () => {
    // Save progress to localStorage
    const currentData = form.getValues();
    localStorage.setItem('tim-questionnaire-data', JSON.stringify(currentData));
    localStorage.setItem('tim-questionnaire-step', currentStep.toString());

    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const clearProgress = () => {
    localStorage.removeItem('tim-questionnaire-data');
    localStorage.removeItem('tim-questionnaire-step');
    form.reset();
    setCurrentStep(0);
    toast({
      title: "Progress Cleared",
      description: "All questionnaire data has been cleared. Starting fresh!",
    });
  };

  const renderStepContent = () => {
    switch (steps[currentStep].id) {
      case 'welcome':
        return (
          <div className="text-center space-y-6 py-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Welcome Tim! 👋</h2>
              <p className="text-xl text-muted-foreground">Let's build your teaching empire together</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg">
                This questionnaire will help us understand your goals and create a comprehensive plan for:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <Card className="p-4">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-primary-foreground font-bold">1</span>
                    </div>
                    <h3 className="font-semibold">Site Foundations</h3>
                    <p className="text-sm text-muted-foreground">Your website strategy and brand identity</p>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-primary-foreground font-bold">2</span>
                    </div>
                    <h3 className="font-semibold">Content Strategy</h3>
                    <p className="text-sm text-muted-foreground">Your content planning and SEO approach</p>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-primary-foreground font-bold">3</span>
                    </div>
                    <h3 className="font-semibold">Course Planning</h3>
                    <p className="text-sm text-muted-foreground">Your YouTube course strategy</p>
                  </div>
                </Card>
              </div>
              <p className="text-muted-foreground">
                This should take about 10-15 minutes to complete. Your progress is automatically saved.
              </p>
            </div>
          </div>
        );
      case 'site-foundations':
        return <SiteFoundationsStep form={form} />;
      case 'content-strategy':
        return <ContentStrategyStep form={form} />;
      case 'course-planning':
        return <CoursePlanningStep form={form} />;
      case 'results':
        return <ResultsStep formData={form.getValues()} />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-lg">Loading your progress...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Tim The Teacher - Project Planner</h1>
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Step {currentStep + 1} of {steps.length}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearProgress}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="w-4 h-4" />
                  Clear Progress
                </Button>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              {steps.map((step, index) => (
                <div key={step.id} className={`${index <= currentStep ? 'text-primary font-medium' : ''}`}>
                  {step.title}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <Card>
            <CardHeader>
              <CardTitle>{steps[currentStep].title}</CardTitle>
              <p className="text-muted-foreground">{steps[currentStep].description}</p>
            </CardHeader>
            <CardContent>
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button onClick={nextStep} className="flex items-center gap-2">
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => {
                    const data = form.getValues();
                    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'tim-questionnaire-data.json';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download JSON
                </Button>
                <Button 
                  className="flex items-center gap-2"
                  onClick={() => {
                    // Create a formatted text plan
                    const data = form.getValues();
                    const planText = `Tim The Teacher - Project Plan
=====================================

Business: ${data.businessName || 'Not specified'}
Description: ${data.businessDescription || 'Not specified'}
Target Audience: ${data.targetAudience || 'Not specified'}

Primary Goals:
${data.primaryGoals?.map(goal => `• ${goal}`).join('\n') || '• Not specified'}

Content Topics:
${data.contentTopics?.map(topic => `• ${topic}`).join('\n') || '• Not specified'}

Course Topics:
${data.courseTopics?.map(topic => `• ${topic}`).join('\n') || '• Not specified'}

Publishing Frequency: ${data.publishingFrequency || 'Not specified'}
Course Duration: ${data.courseDuration || 'Not specified'}
Pricing Model: ${data.pricingModel || 'Not specified'}

Generated on: ${new Date().toLocaleDateString()}`;

                    const blob = new Blob([planText], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'tim-project-plan.txt';
                    a.click();
                    URL.revokeObjectURL(url);
                    
                    toast({
                      title: "Plan Downloaded!",
                      description: "Your project plan has been saved successfully.",
                    });
                  }}
                >
                  <FileText className="w-4 h-4" />
                  Download Plan
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
