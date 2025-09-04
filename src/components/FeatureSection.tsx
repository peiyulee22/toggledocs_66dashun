import { Zap, RefreshCw, FileText, GitBranch, Search, Bot } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Auto-Detect Changes",
    description: "Instantly detects when you modify code and identifies which documentation needs updating.",
    details: ["Real-time monitoring", "Smart change detection", "Context-aware analysis"]
  },
  {
    icon: RefreshCw,
    title: "AI-Suggested Updates", 
    description: "Provides intelligent recommendations for documentation updates based on your code changes.",
    details: ["Smart suggestions", "Natural language updates", "Contextual improvements"]
  },
  {
    icon: FileText,
    title: "Seamless Integration",
    description: "Works directly in VS Code with non-intrusive notifications and quick actions.",
    details: ["Native VS Code UI", "Quick fixes", "No workflow disruption"]
  }
];

const benefits = [
  { icon: Search, label: "Faster Documentation Discovery" },
  { icon: GitBranch, label: "Always Up-to-Date Content" },
  { icon: Bot, label: "AI-Powered Assistance" },
];

export const FeatureSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-primary">ToggleDocs?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Documentation gets outdated the moment you change code. 
            ToggleDocs automatically detects changes and suggests updates in real-time.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-glow-secondary transition-all duration-300 border-border">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl bg-primary/10 mr-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-semibold text-center mb-8">Built for Developer Productivity</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                <benefit.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};