import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sparkles,
  FileText,
  Mail,
  Calculator,
  Send,
  Copy,
  Download,
  Check,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

type DocumentType = "proposal" | "email" | "estimate";

const documentTypes = [
  { id: "proposal", label: "Proposal", icon: FileText, description: "Professional project proposals" },
  { id: "email", label: "Email", icon: Mail, description: "Business communication" },
  { id: "estimate", label: "Estimate", icon: Calculator, description: "Project cost estimates" },
] as const;

const examplePrompts = {
  proposal: "Create a proposal for a website redesign project for a local bakery. The project includes homepage, menu page, and contact form.",
  email: "Write a follow-up email to a client about a pending project approval. Keep it professional but friendly.",
  estimate: "Generate an estimate for building a mobile app with user authentication, push notifications, and payment integration.",
};

export default function AIAssistant() {
  const [selectedType, setSelectedType] = useState<DocumentType>("proposal");
  const [clientName, setClientName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!projectDetails.trim()) return;
    
    setIsGenerating(true);
    setGeneratedContent("");

    // Simulate AI generation with typing effect
    const mockResponses = {
      proposal: `# Project Proposal${clientName ? ` for ${clientName}` : ""}

## Executive Summary
Based on your requirements, I'm pleased to present this comprehensive proposal for your project.

## Project Scope
${projectDetails}

## Deliverables
• Custom design mockups and prototypes
• Fully responsive implementation
• Cross-browser compatibility testing
• Documentation and training

## Timeline
- **Phase 1**: Discovery & Planning (1 week)
- **Phase 2**: Design & Development (3-4 weeks)
- **Phase 3**: Testing & Launch (1 week)

## Investment
The total investment for this project is **$4,500 - $6,000** depending on final requirements.

## Next Steps
1. Review this proposal
2. Schedule a follow-up call
3. Sign agreement and begin work

I look forward to working with you on this exciting project!`,

      email: `Subject: Following Up on Our Recent Discussion

Dear ${clientName || "Client"},

I hope this message finds you well. I wanted to follow up on our recent conversation regarding your project.

${projectDetails}

I'm excited about the opportunity to collaborate with you on this initiative. If you have any questions or would like to discuss further details, please don't hesitate to reach out.

Looking forward to hearing from you soon.

Best regards,
[Your Name]`,

      estimate: `# Project Estimate${clientName ? ` - ${clientName}` : ""}

## Project Overview
${projectDetails}

## Cost Breakdown

| Item | Description | Cost |
|------|-------------|------|
| Design | UI/UX design and prototyping | $1,500 |
| Development | Frontend + Backend implementation | $3,500 |
| Testing | QA and bug fixes | $500 |
| Project Management | Coordination and communication | $500 |

## Total Estimate: **$6,000**

## Payment Terms
- 30% upfront deposit
- 40% upon design approval
- 30% upon project completion

## Validity
This estimate is valid for 30 days from the date of issue.

*Note: Final costs may vary based on specific requirements and scope changes.*`,
    };

    const response = mockResponses[selectedType];
    
    // Simulate typing effect
    for (let i = 0; i <= response.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 5));
      setGeneratedContent(response.slice(0, i));
    }
    
    setIsGenerating(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUseExample = () => {
    setProjectDetails(examplePrompts[selectedType]);
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center glow-primary-sm">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold">AI Assistant</h1>
        </div>
        <p className="text-muted-foreground">
          Generate professional documents instantly with AI-powered assistance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          {/* Document Type Selection */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="text-lg">Document Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {documentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all duration-200 text-left",
                      selectedType === type.id
                        ? "border-primary bg-primary/10 glow-primary-sm"
                        : "border-border hover:border-primary/50 hover:bg-accent/50"
                    )}
                  >
                    <type.icon className={cn(
                      "w-6 h-6 mb-2",
                      selectedType === type.id ? "text-primary" : "text-muted-foreground"
                    )} />
                    <p className="font-medium text-sm">{type.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Input Form */}
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="text-lg">Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name (Optional)</Label>
                <Input
                  id="clientName"
                  placeholder="e.g., Acme Corporation"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="projectDetails">Describe Your Project</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleUseExample}
                    className="text-xs text-primary"
                  >
                    Use Example
                  </Button>
                </div>
                <Textarea
                  id="projectDetails"
                  placeholder="Describe the project, requirements, and any specific details you want to include..."
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  className="min-h-[150px] bg-background/50"
                />
              </div>

              <Button
                variant="hero"
                className="w-full"
                onClick={handleGenerate}
                disabled={isGenerating || !projectDetails.trim()}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate {documentTypes.find((t) => t.id === selectedType)?.label}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Output Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card variant="glass" className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Generated Document</CardTitle>
              <AnimatePresence>
                {generatedContent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex items-center gap-2"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-success" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardHeader>
            <CardContent>
              <div className="min-h-[400px] p-4 rounded-xl bg-background/50 border border-border overflow-auto">
                {generatedContent ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm">
                      {generatedContent}
                      {isGenerating && (
                        <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
                      )}
                    </pre>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground">
                    <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                    <p>Your generated document will appear here</p>
                    <p className="text-sm mt-1">Fill in the details and click generate</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
