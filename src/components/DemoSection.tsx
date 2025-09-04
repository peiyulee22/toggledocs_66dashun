import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Sidebar, FileText, MessageSquare } from "lucide-react";

export const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState("browser");

  const demos = {
    browser: {
      title: "Code Editor",
      icon: Monitor,
      description: "Real-time change detection in VS Code"
    },
    sidebar: {
      title: "Smart Notifications",
      icon: Sidebar, 
      description: "Non-intrusive update suggestions"
    },
    docs: {
      title: "Auto Documentation",
      icon: FileText,
      description: "AI-powered documentation updates"
    },
    chat: {
      title: "Quick Actions",
      icon: MessageSquare,
      description: "One-click documentation fixes"
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

            {/* Mock VS Code Interface */}
            <div className="bg-background rounded-lg border border-border overflow-hidden">
              {/* VS Code Header */}
              <div className="bg-secondary px-4 py-2 flex items-center space-x-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded" />
                  <span className="text-muted-foreground">VS Code</span>
                </div>
                <div className="flex-1 flex items-center space-x-4">
                  <span className="text-muted-foreground">src/api/users.ts</span>
                  <span className="text-xs text-primary">● Modified</span>
                </div>
                <div className="text-xs text-primary">ToggleDocs: Active</div>
              </div>

              {/* Content Area */}
              <div className="flex min-h-[400px]">
                {/* Code Editor */}
                <div className="flex-1 p-4">
                   <div className="bg-code-bg p-4 rounded font-mono text-sm">
                     <div className="space-y-1">
                       <div className="text-muted-foreground">1  export interface User &#123;</div>
                       <div className="text-muted-foreground">2    id: string;</div>
                       <div className="text-muted-foreground">3    name: string;</div>
                       <div className="text-primary bg-primary/10 px-2 -mx-2">4  + email: string; // New field added</div>
                       <div className="text-muted-foreground">5  &#125;</div>
                       <div className="text-muted-foreground">6  </div>
                       <div className="text-primary bg-primary/10 px-2 -mx-2">7  + export async function addUser(userData: User) &#123;</div>
                       <div className="text-primary bg-primary/10 px-2 -mx-2">8  +   return await api.post('/users', userData);</div>
                       <div className="text-primary bg-primary/10 px-2 -mx-2">9  + &#125;</div>
                     </div>
                   </div>
                  
                  {/* Notification */}
                  <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm">Documentation updates suggested</span>
                  </div>
                </div>

                {/* Update Panel */}
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
                      ToggleDocs Assistant
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    {activeDemo === 'docs' && (
                      <>
                         <div className="bg-primary/10 p-3 rounded">
                          <div className="text-sm font-medium mb-1">Changes Detected</div>
                          <div className="text-xs text-muted-foreground">
                            • Added email field to User interface<br />
                            • New addUser function added
                          </div>
                        </div>
                        <div className="bg-yellow-500/10 p-3 rounded">
                          <div className="text-sm font-medium mb-1">Suggested Updates</div>
                          <div className="text-xs text-muted-foreground">
                            Update API.md with new addUser endpoint
                          </div>
                        </div>
                      </>
                    )}
                    {activeDemo === 'chat' && (
                      <div className="space-y-3">
                        <Button size="sm" className="w-full justify-start">
                          <FileText className="h-3 w-3 mr-2" />
                          Update API Documentation
                        </Button>
                        <Button size="sm" variant="outline" className="w-full justify-start">
                          <MessageSquare className="h-3 w-3 mr-2" />
                          Add Usage Example
                        </Button>
                      </div>
                    )}
                    {activeDemo === 'sidebar' && (
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-500/10 rounded">
                          <div className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                            Documentation Update Needed
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            2 files may need updates
                          </div>
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