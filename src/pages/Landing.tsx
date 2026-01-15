import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  FileText,
  Users,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Generate professional proposals, emails, and estimates in seconds with advanced AI.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Organize, edit, and export your documents as polished PDFs ready to send.",
  },
  {
    icon: Users,
    title: "Client CRM",
    description: "Keep track of all your clients, projects, and communication history in one place.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Save hours every week with instant document generation and smart templates.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and never shared. Full control over your information.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Designer",
    content: "FlowAI cut my proposal time from 2 hours to 10 minutes. Game changer!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Web Developer",
    content: "The AI understands exactly what I need. My clients love the professional documents.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Consultant",
    content: "Finally, a tool that speaks my language. The estimates are spot-on every time.",
    rating: 5,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center glow-primary-sm">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">FlowAI</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/pricing">
                <Button variant="ghost" size="sm">Pricing</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="hero" size="sm">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-hero-pattern pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          className="max-w-5xl mx-auto text-center relative"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="gradient" className="mb-6 px-4 py-1.5">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Freelance Tools
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Create Stunning{" "}
            <span className="gradient-text">Proposals & Estimates</span>{" "}
            in Seconds
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            FlowAI helps freelancers generate professional proposals, emails, and estimates
            using advanced AI. Save hours every week and win more clients.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/dashboard">
              <Button variant="hero" size="xl">
                Start Creating Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/ai-assistant">
              <Button variant="hero-outline" size="xl">
                Try AI Assistant
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-success" />
              No credit card required
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-success" />
              Free forever plan
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-success" />
              Cancel anytime
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for freelancers who want to work smarter, not harder.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="interactive-glass" className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-4 glow-primary-sm">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by Freelancers
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of freelancers who trust FlowAI for their business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass" className="h-full p-6">
                  <CardContent className="p-0">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4">&quot;{testimonial.content}&quot;</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card variant="glow" className="p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <CardContent className="p-0 relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join FlowAI today and start creating professional documents in seconds.
                No credit card required.
              </p>
              <Link to="/dashboard">
                <Button variant="hero" size="xl">
                  Get Started for Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 gradient-primary rounded-md flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">FlowAI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 FlowAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
