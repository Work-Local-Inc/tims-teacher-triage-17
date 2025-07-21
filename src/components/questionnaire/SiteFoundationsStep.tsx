
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { QuestionnaireFormData } from '@/schemas/questionnaireSchema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface SiteFoundationsStepProps {
  form: UseFormReturn<QuestionnaireFormData>;
}

export const SiteFoundationsStep = ({ form }: SiteFoundationsStepProps) => {
  const primaryGoalOptions = [
    'Generate leads for courses',
    'Build brand authority',
    'Sell digital products',
    'Create community',
    'Showcase expertise',
    'Blog monetization'
  ];

  const brandPersonalityOptions = [
    'Professional & Expert',
    'Friendly & Approachable',
    'Inspirational & Motivational',
    'Practical & No-nonsense',
    'Creative & Innovative',
    'Trustworthy & Reliable'
  ];

  const styleOptions = [
    { value: 'modern-clean', label: 'Modern & Clean' },
    { value: 'warm-inviting', label: 'Warm & Inviting' },
    { value: 'professional-corporate', label: 'Professional & Corporate' },
    { value: 'creative-bold', label: 'Creative & Bold' },
    { value: 'minimal-elegant', label: 'Minimal & Elegant' }
  ];


  return (
    <Form {...form}>
      <div className="space-y-8">
        {/* Business Basics */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Business Basics</h3>
          
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business/Brand Name</FormLabel>
                <FormControl>
                  <Input placeholder="Tim The Teacher" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Describe what you do, who you help, and what makes you unique..."
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This helps us understand your unique value proposition
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="targetAudience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Audience</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Who are your ideal students? (age, profession, learning goals, etc.)"
                    className="min-h-[80px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Goals & Brand */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Goals & Brand Identity</h3>
          
          <FormField
            control={form.control}
            name="primaryGoals"
            render={() => (
              <FormItem>
                <FormLabel>Primary Website Goals (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {primaryGoalOptions.map((goal) => (
                    <FormField
                      key={goal}
                      control={form.control}
                      name="primaryGoals"
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

          <FormField
            control={form.control}
            name="brandPersonality"
            render={() => (
              <FormItem>
                <FormLabel>Brand Personality (select all that apply)</FormLabel>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {brandPersonalityOptions.map((personality) => (
                    <FormField
                      key={personality}
                      control={form.control}
                      name="brandPersonality"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={(field.value || []).includes(personality)}
                                onCheckedChange={(checked) => {
                                  const currentValue = field.value || [];
                                  return checked
                                    ? field.onChange([...currentValue, personality])
                                    : field.onChange(
                                        currentValue.filter((value) => value !== personality)
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {personality}
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

        {/* Technical & Existing Setup */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Current Setup</h3>
          
          <FormField
            control={form.control}
            name="existingWebsite"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Existing Website (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourwebsite.com" {...field} />
                </FormControl>
                <FormDescription>
                  If you have an existing website, we'll analyze it for improvements
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredStyle"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Preferred Design Style</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="grid grid-cols-1 gap-4"
                  >
                    {styleOptions.map((style) => (
                      <div key={style.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={style.value} id={style.value} />
                        <Label htmlFor={style.value}>{style.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

      </div>
    </Form>
  );
};
