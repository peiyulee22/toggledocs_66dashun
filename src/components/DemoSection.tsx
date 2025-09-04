import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Sidebar, FileText, MessageSquare } from "lucide-react";

export const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState("browser");

  const demos = {
    browser: {
      title: "Browser Extension",
      icon: Monitor,
      description: "Works seamlessly in Chrome and Edge"
    },
    sidebar: {
      title: "Smart Sidebar",
      icon: Sidebar, 
      description: "Toggle-activated assistance panel"
    },
    docs: {
      title: "Documentation AI",
      icon: FileText,
      description: "Intelligent summaries and updates"
    },
    chat: {
      title: "Q&A Interface",
      icon: MessageSquare,
      description: "Natural language doc queries"
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See It In <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience how ToggleDocs transforms your documentation workflow
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(demos).map(([key, demo]) => (
              <Button
                key={key}
                variant={activeDemo === key ? "default" : "outline"}
                onClick={() => setActiveDemo(key)}
                className={`flex items-center space-x-2 ${
                  activeDemo === key ? "bg-primary shadow-glow-primary" : ""
                }`}
              >
                <demo.icon className="h-4 w-4" />
                <span>{demo.title}</span>
              </Button>
            ))}
          </div>

          {/* Demo Content */}
          <Card className="p-8 bg-card border-border shadow-glow-secondary">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">{demos[activeDemo as keyof typeof demos].title}</h3>
              <p className="text-muted-foreground">{demos[activeDemo as keyof typeof demos].description}</p>
            </div>

            {/* Mock Browser Interface */}
            <div className="bg-background rounded-lg border border-border overflow-hidden">
              {/* Browser Header */}
              <div className="bg-secondary px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="flex-1 bg-input rounded px-3 py-1 text-sm text-muted-foreground">
                  https://github.com/yourorg/project/docs
                </div>
                <div className="text-xs text-muted-foreground">ToggleDocs: ON</div>
              </div>

              {/* Content Area */}
              <div className="flex min-h-[400px]">
                {/* Main Content */}
                <div className="flex-1 p-6">
                  <h1 className="text-2xl font-bold mb-4">Project Documentation</h1>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Welcome to the project documentation. This guide will help you get started...</p>
                    <div className="bg-code-bg p-4 rounded font-mono text-sm">
                      <div className="text-primary"># Quick Start</div>
                      <div>npm install project</div>
                      <div>npm run dev</div>
                    </div>
                    <p>For more advanced usage, see the configuration section...</p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className={`w-80 bg-card border-l border-border transition-all duration-500 ${
                  activeDemo === 'sidebar' || activeDemo === 'chat' || activeDemo === 'docs' 
                    ? 'translate-x-0' 
                    : 'translate-x-full'
                }`}>
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold flex items-center">
                      {(() => {
                        const IconComponent = demos[activeDemo as keyof typeof demos].icon;
                        return <IconComponent className="h-4 w-4 mr-2 text-primary" />;
                      })()}
                      Docs Copilot
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    {activeDemo === 'docs' && (
                      <>
                        <div className="bg-primary/10 p-3 rounded">
                          <div className="text-sm font-medium mb-1">TL;DR Summary</div>
                          <div className="text-xs text-muted-foreground">
                            Quick start guide for setting up the project with npm commands.
                          </div>
                        </div>
                        <div className="bg-yellow-500/10 p-3 rounded">
                          <div className="text-sm font-medium mb-1">Suggested Update</div>
                          <div className="text-xs text-muted-foreground">
                            Add Docker setup based on recent commits
                          </div>
                        </div>
                      </>
                    )}
                    {activeDemo === 'chat' && (
                      <div className="space-y-3">
                        <div className="bg-secondary p-3 rounded">
                          <div className="text-sm">How do I configure the database?</div>
                        </div>
                        <div className="bg-primary/10 p-3 rounded">
                          <div className="text-sm">Check the .env.example file and set DATABASE_URL...</div>
                        </div>
                      </div>
                    )}
                    {activeDemo === 'sidebar' && (
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span>3 pages found</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="h-4 w-4 text-primary" />
                          <span>Ask questions</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};