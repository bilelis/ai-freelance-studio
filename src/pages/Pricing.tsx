import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    icon: Zap,
    features: [
      "5 AI generations per month",
      "3 clients",
      "Basic templates",
      "PDF export",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For growing freelancers",
    icon: Sparkles,
    features: [
      "Unlimited AI generations",
      "Unlimited clients",
      "Premium templates",
      "Priority PDF processing",
      "Custom branding",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description: "For agencies and teams",
    icon: Building2,
    features: [
      "Everything in Pro",
      "5 team members",
      "Team collaboration",
      "Shared client database",
      "Advanced analytics",
      "API access",
      "Dedicated support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge variant="gradient" className="mb-4">
          Simple Pricing
        </Badge>
        <h1 className="text-4xl font-bold mb-4">
          Choose the plan that fits your needs
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start free and upgrade as you grow. All plans include our core AI features.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
          >
            <Card
              variant={plan.popular ? "glow" : "glass"}
              className={cn(
                "relative h-full flex flex-col",
                plan.popular && "border-primary"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="gradient">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4",
                    plan.popular
                      ? "gradient-primary glow-primary-sm"
                      : "bg-primary/10"
                  )}
                >
                  <plan.icon
                    className={cn(
                      "w-6 h-6",
                      plan.popular ? "text-primary-foreground" : "text-primary"
                    )}
                  />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-success shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-muted-foreground">
          Have questions?{" "}
          <Link to="/settings" className="text-primary hover:underline">
            Contact our support team
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
