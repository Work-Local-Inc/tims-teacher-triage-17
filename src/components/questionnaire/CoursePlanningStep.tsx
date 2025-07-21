
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { QuestionnaireFormData } from '@/schemas/questionnaireSchema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface CoursePlanningStepProps {
  form: UseFormReturn<QuestionnaireFormData>;
}

export const CoursePlanningStep = ({ form }: CoursePlanningStepProps) => {
  const courseTopicOptions = [
    'Leadership & Management',
    'Communication Skills',
    'Professional Development',
    'Career Advancement',
    'Digital Skills',
    'Industry Certifications',
    'Soft Skills Training',
    'Technical Skills',
    'Personal Productivity',
    'Entrepreneurship',
    'Other (specify below)'
  ];

  const skillLevelOptions = [
    'Complete Beginner',
    'Some Experience',
    'Intermediate',
    'Advanced',
    'Expert/Professional'
  ];

  const courseFormatOptions = [
    'Short tutorials (5-15 mins)',
    'Deep dive lessons (30-60 mins)',
    'Multi-part series',
    'Live streaming',
    'Interactive workshops',
    'Case study analysis',
    'Q&A sessions',
    'Guest interviews'
  ];

  const courseDurationOptions = [
    { value: 'short-form', label: 'Short-form (under 30 mins total)' },
    { value: 'medium-course', label: 'Medium course (1-5 hours total)' },
    { value: 'comprehensive', label: 'Comprehensive course (5-20 hours)' },
    { value: 'extensive-program', label: 'Extensive program (20+ hours)' }
  ];

  const pricingModelOptions = [
    { value: 'free-content', label: 'Free content with premium upsells' },
    { value: 'freemium', label: 'Freemium model' },
    { value: 'paid-courses', label: 'Paid courses from the start' },
    { value: 'subscription', label: 'Subscription/membership model' },
    { value: 'corporate-training', label: 'Corporate training packages' }
  ];

  const deliveryMethodOptions = [
    'YouTube videos',
    'Online course platforms',
    'Website integration',
    'Email course series',
    'Downloadable materials',
    'Live webinars',
    'Group coaching',
    'One-on-one mentoring'
  ];

  const courseGoalOptions = [
    'Build personal brand',
    'Generate passive income',
    'Establish thought leadership',
    'Scale teaching impact',
    'Create recurring revenue',
    'Build email list',
    'Develop course library',
    'Launch coaching business'
  ];

  return (
    <Form {...form}>
      <div className="space-y-8">
        {/* Course Content */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Course Content</h3>
          
          <FormField
            control={form.control}
            name="courseTopics"
            render={() => (
              <FormItem>
                <FormLabel>What course topics do you want to teach? (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {courseTopicOptions.map((topic) => (
                    <FormField
                      key={topic}
                      control={form.control}
                      name="courseTopics"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={(field.value || []).includes(topic)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field.value || [];
                                  return checked
                                    ? field.onChange([...currentValue, topic])
                                    : field.onChange(
                                        currentValue.filter((value) => value !== topic)
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {topic}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="targetSkillLevels"
            render={() => (
              <FormItem>
                <FormLabel>Target Skill Levels (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {skillLevelOptions.map((level) => (
                    <FormField
                      key={level}
                      control={form.control}
                      name="targetSkillLevels"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={(field.value || []).includes(level)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field.value || [];
                                  return checked
                                    ? field.onChange([...currentValue, level])
                                    : field.onChange(
                                        currentValue.filter((value) => value !== level)
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {level}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="courseFormats"
            render={() => (
              <FormItem>
                <FormLabel>Preferred Course Formats (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {courseFormatOptions.map((format) => (
                    <FormField
                      key={format}
                      control={form.control}
                      name="courseFormats"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={(field.value || []).includes(format)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field.value || [];
                                  return checked
                                    ? field.onChange([...currentValue, format])
                                    : field.onChange(
                                        currentValue.filter((value) => value !== format)
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {format}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Course Strategy */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Course Strategy</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="courseDuration"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Typical Course Duration</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-1 gap-2"
                    >
                      {courseDurationOptions.map((duration) => (
                        <div key={duration.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={duration.value} id={duration.value} />
                          <Label htmlFor={duration.value} className="text-sm">{duration.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pricingModel"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Preferred Pricing Model</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-1 gap-2"
                    >
                      {pricingModelOptions.map((pricing) => (
                        <div key={pricing.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={pricing.value} id={pricing.value} />
                          <Label htmlFor={pricing.value} className="text-sm">{pricing.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="deliveryMethod"
            render={() => (
              <FormItem>
                <FormLabel>Course Delivery Methods (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {deliveryMethodOptions.map((method) => (
                    <FormField
                      key={method}
                      control={form.control}
                      name="deliveryMethod"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={(field.value || []).includes(method)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field.value || [];
                                  return checked
                                    ? field.onChange([...currentValue, method])
                                    : field.onChange(
                                        currentValue.filter((value) => value !== method)
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {method}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Technical & Goals */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Technical Setup & Goals</h3>
          
          <FormField
            control={form.control}
            name="technicalSetup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Technical Setup</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe your current setup for creating content (camera, microphone, editing software, etc.)"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This helps us recommend the right tools and workflows for your course creation
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="courseGoals"
            render={() => (
              <FormItem>
                <FormLabel>Course Business Goals (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {courseGoalOptions.map((goal) => (
                    <FormField
                      key={goal}
                      control={form.control}
                      name="courseGoals"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={(field.value || []).includes(goal)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field.value || [];
                                  return checked
                                    ? field.onChange([...currentValue, goal])
                                    : field.onChange(
                                        currentValue.filter((value) => value !== goal)
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {goal}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </Form>
  );
};
