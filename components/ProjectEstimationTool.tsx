import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProjectEstimationTool = () => {
  const [projectType, setProjectType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [timeline, setTimeline] = useState('');
  const [result, setResult] = useState<{ timeline: string; budget: string } | null>(null);

  const calculateEstimate = () => {
    // Simple estimation logic (could be more sophisticated in a real implementation)
    let estimatedTimeline = '2-4 months';
    let estimatedBudget = '$25,000 - $75,000';

    if (projectType === 'web-application') {
      if (complexity === 'simple') {
        estimatedTimeline = '1-2 months';
        estimatedBudget = '$10,000 - $25,000';
      } else if (complexity === 'moderate') {
        estimatedTimeline = '2-4 months';
        estimatedBudget = '$25,000 - $50,000';
      } else {
        estimatedTimeline = '4-6 months';
        estimatedBudget = '$50,000 - $100,000';
      }
    } else if (projectType === 'mobile-app') {
      if (complexity === 'simple') {
        estimatedTimeline = '2-3 months';
        estimatedBudget = '$15,000 - $35,000';
      } else if (complexity === 'moderate') {
        estimatedTimeline = '3-5 months';
        estimatedBudget = '$35,000 - $75,000';
      } else {
        estimatedTimeline = '5-8 months';
        estimatedBudget = '$75,000 - $150,000';
      }
    } else if (projectType === 'ai-integration') {
      if (complexity === 'simple') {
        estimatedTimeline = '1-3 months';
        estimatedBudget = '$20,000 - $40,000';
      } else if (complexity === 'moderate') {
        estimatedTimeline = '3-6 months';
        estimatedBudget = '$40,000 - $90,000';
      } else {
        estimatedTimeline = '6-12 months';
        estimatedBudget = '$90,000 - $200,000';
      }
    }

    setResult({
      timeline: estimatedTimeline,
      budget: estimatedBudget
    });
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Project Estimation Calculator</CardTitle>
        <CardDescription>
          Answer a few questions about your project to receive a personalized estimate
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Project Type</label>
            <Select value={projectType} onValueChange={setProjectType}>
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-application">Web Application</SelectItem>
                <SelectItem value="mobile-app">Mobile App</SelectItem>
                <SelectItem value="ai-integration">AI Integration</SelectItem>
                <SelectItem value="product-strategy">Product Strategy</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Project Complexity</label>
            <Select value={complexity} onValueChange={setComplexity}>
              <SelectTrigger>
                <SelectValue placeholder="Select complexity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="simple">Simple</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="complex">Complex</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Target Timeline</label>
            <Select value={timeline} onValueChange={setTimeline}>
              <SelectTrigger>
                <SelectValue placeholder="Select timeline preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flexible">Flexible</SelectItem>
                <SelectItem value="aggressive">Aggressive (1-3 months)</SelectItem>
                <SelectItem value="standard">Standard (3-6 months)</SelectItem>
                <SelectItem value="relaxed">Relaxed (6+ months)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={calculateEstimate}
            className="w-full"
            disabled={!projectType || !complexity || !timeline}
          >
            Calculate Estimate
          </Button>

          {result && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-bold mb-2">Estimated Timeline & Budget</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="text-lg font-semibold">{result.timeline}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <p className="text-lg font-semibold">{result.budget}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                This is an estimate based on our experience with similar projects. 
                Contact us for a detailed quote tailored to your specific requirements.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectEstimationTool;