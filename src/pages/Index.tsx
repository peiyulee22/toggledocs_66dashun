import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { DemoSection } from "@/components/DemoSection";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
      <DemoSection />
      
      {/* Live Prototype Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Try the <span className="text-primary">Live Prototype</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience ToggleDocs in action with our VS Code simulator. See how it detects code changes and suggests documentation updates in real-time.
          </p>
          <Link to="/vscode-demo">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow-primary group">
              Launch VS Code Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default Index;