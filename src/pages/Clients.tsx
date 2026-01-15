import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Users,
  Plus,
  Search,
  Mail,
  Phone,
  Building2,
  MoreVertical,
  FileText,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockClients = [
  {
    id: 1,
    name: "Acme Corporation",
    email: "contact@acme.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corp",
    documents: 5,
    status: "active",
  },
  {
    id: 2,
    name: "TechStart Inc",
    email: "hello@techstart.io",
    phone: "+1 (555) 234-5678",
    company: "TechStart",
    documents: 3,
    status: "active",
  },
  {
    id: 3,
    name: "Design Studio",
    email: "info@designstudio.co",
    phone: "+1 (555) 345-6789",
    company: "Design Studio Co",
    documents: 8,
    status: "active",
  },
  {
    id: 4,
    name: "Global Media",
    email: "contact@globalmedia.com",
    phone: "+1 (555) 456-7890",
    company: "Global Media LLC",
    documents: 2,
    status: "inactive",
  },
];

export default function Clients() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = mockClients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Clients</h1>
          </div>
          <p className="text-muted-foreground">
            Manage your client relationships and track projects.
          </p>
        </div>
        <Button variant="hero">
          <Plus className="w-4 h-4" />
          Add Client
        </Button>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-card"
          />
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
      >
        <Card variant="glass" className="p-4">
          <p className="text-2xl font-bold">{mockClients.length}</p>
          <p className="text-sm text-muted-foreground">Total Clients</p>
        </Card>
        <Card variant="glass" className="p-4">
          <p className="text-2xl font-bold">
            {mockClients.filter((c) => c.status === "active").length}
          </p>
          <p className="text-sm text-muted-foreground">Active</p>
        </Card>
        <Card variant="glass" className="p-4">
          <p className="text-2xl font-bold">
            {mockClients.reduce((acc, c) => acc + c.documents, 0)}
          </p>
          <p className="text-sm text-muted-foreground">Documents</p>
        </Card>
        <Card variant="glass" className="p-4">
          <p className="text-2xl font-bold">$24.5k</p>
          <p className="text-sm text-muted-foreground">Total Revenue</p>
        </Card>
      </motion.div>

      {/* Clients Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredClients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Card variant="interactive-glass" className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.company}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Client</DropdownMenuItem>
                    <DropdownMenuItem>Create Document</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{client.phone}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {client.documents} documents
                  </span>
                </div>
                <Badge
                  variant={client.status === "active" ? "success" : "secondary"}
                >
                  {client.status}
                </Badge>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
