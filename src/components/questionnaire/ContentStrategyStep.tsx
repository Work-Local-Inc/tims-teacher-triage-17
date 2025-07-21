
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { QuestionnaireFormData } from '@/schemas/questionnaireSchema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ContentStrategyStepProps {
  form: UseFormReturn<QuestionnaireFormData>;
}

export const ContentStrategyStep = ({ form }: ContentStrategyStepProps) => {
  const contentTopicOptions = [
    'Adult Learning Strategies',
    'Professional Development',
    'Career Coaching',
    'Skill Building',
    'Leadership Training',
    'Communication Skills',
    'Time Management',
    'Personal Growth',
    'Industry-Specific Training',
    'Other (specify below)'
  ];

  const contentFormatOptions = [
    'Blog Posts',
    'Video Tutorials',
    'Podcasts',
    'Webinars',
    'Downloadable Resources',
    'Case Studies',
    'Infographics',
    'Email Newsletters',
    'Social Media Content',
    'Interactive Quizzes'
  ];

  const publishingFrequencyOptions = [
    { value: 'daily', label: 'Daily' },
    { value: '3-times-week', label: '3 times per week' },
    { value: 'twice-week', label: 'Twice per week' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'bi-weekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  const seoGoalOptions = [
    'Rank for educational keywords',
    'Build domain authority',
    'Increase organic traffic',
    'Local SEO (if applicable)',
    'Long-tail keyword targeting',
    'Compete with industry leaders',
    'Voice search optimization',
    'Featured snippets'
  ];

  const contentChallengeOptions = [
    'Finding time to create content',
    'Coming up with fresh ideas',
    'Technical aspects (editing, SEO)',
    'Consistency in publishing',
    'Measuring content performance',
    'Repurposing content effectively',
    'Engaging with audience',
    'Content promotion'
  ];

  return (
    <Form {...form}>
      <div className="space-y-8">
        {/* Content Focus */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Content Focus</h3>
          
          <FormField
            control={form.control}
            name="contentTopics"
            render={() => (
              <FormItem>
                <FormLabel>What topics will you focus on? (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {contentTopicOptions.map((topic) => (
                    <FormField
                      key={topic}
                      control={form.control}
                      name="contentTopics"
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
            name="contentFormats"
            render={() => (
              <FormItem>
                <FormLabel>Content Formats (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {contentFormatOptions.map((format) => (
                    <FormField
                      key={format}
                      control={form.control}
                      name="contentFormats"
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

        {/* Publishing Strategy */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Publishing Strategy</h3>
          
          <FormField
            control={form.control}
            name="publishingFrequency"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>How often do you want to publish new content?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    {publishingFrequencyOptions.map((frequency) => (
                      <div key={frequency.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={frequency.value} id={frequency.value} />
                        <Label htmlFor={frequency.value}>{frequency.label}</Label>
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
            name="seoGoals"
            render={() => (
              <FormItem>
                <FormLabel>SEO Goals (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {seoGoalOptions.map((goal) => (
                    <FormField
                      key={goal}
                      control={form.control}
                      name="seoGoals"
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

        {/* Current Content & Challenges */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Current Content & Challenges</h3>
          
          <FormField
            control={form.control}
            name="existingContent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Existing Content Assets (optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="List any existing content, blog posts, videos, or materials you have..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This helps us understand what content we can repurpose or build upon
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contentChallenges"
            render={() => (
              <FormItem>
                <FormLabel>Content Challenges (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {contentChallengeOptions.map((challenge) => (
                    <FormField
                      key={challenge}
                      control={form.control}
                      name="contentChallenges"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={(field.value || []).includes(challenge)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field.value || [];
                                  return checked
                                    ? field.onChange([...currentValue, challenge])
                                    : field.onChange(
                                        currentValue.filter((value) => value !== challenge)
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {challenge}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormDescription>
                  Understanding your challenges helps us provide better solutions
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </Form>
  );
};
