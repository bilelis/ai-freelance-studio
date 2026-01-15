import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  FileText,
  Users,
  TrendingUp,
  Plus,
  ArrowRight,
  Clock,
} from "lucide-react";

const stats = [
  { label: "Documents Created", value: "24", trend: "+12%", icon: FileText },
  { label: "Active Clients", value: "8", trend: "+3", icon: Users },
  { label: "Time Saved", value: "18h", trend: "This month", icon: Clock },
  { label: "Success Rate", value: "92%", trend: "+5%", icon: TrendingUp },
];

const recentDocuments = [
  { title: "Website Redesign Proposal", client: "Acme Corp", type: "Proposal", date: "2 hours ago" },
  { title: "Q1 Project Estimate", client: "TechStart Inc", type: "Estimate", date: "1 day ago" },
  { title: "Follow-up Email", client: "Design Studio", type: "Email", date: "2 days ago" },
];

const quickActions = [
  { label: "New Proposal", icon: FileText, path: "/ai-assistant", color: "bg-primary" },
  { label: "New Estimate", icon: Sparkles, path: "/ai-assistant", color: "bg-success" },
  { label: "Add Client", icon: Users, path: "/clients", color: "bg-warning" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your freelance business.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
      >
        {quickActions.map((action, index) => (
          <Link key={action.label} to={action.path}>
            <Card
              variant="interactive-glass"
              className="p-4 flex items-center gap-4 hover:glow-primary-sm transition-all"
            >
              <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                <action.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{action.label}</p>
              </div>
              <Plus className="w-5 h-5 text-muted-foreground" />
            </Card>
          </Link>
        ))}
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat, index) => (
          <Card key={stat.label} variant="glass" className="p-6">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {stat.trend}
                </Badge>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card variant="glass">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Documents</CardTitle>
              <Link to="/documents">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.title}</p>
                        <p className="text-sm text-muted-foreground">{doc.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{doc.type}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">{doc.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Assistant Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card variant="glow" className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Generate professional proposals, emails, and estimates instantly with our AI-powered assistant.
              </p>
              <Link to="/ai-assistant">
                <Button variant="hero" className="w-full">
                  Start Creating
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
