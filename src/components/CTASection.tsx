import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Chrome } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 text-center bg-hero-gradient border-border shadow-glow-secondary">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-primary">Documentation?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join the beta and be among the first to experience smarter, faster, maintainable documentation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow-primary group">
              <Chrome className="mr-2 h-5 w-5" />
              Get Chrome Extension
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-2">
              <div className="font-semibold text-primary">3 Month Timeline</div>
              <div className="text-sm text-muted-foreground">Lightweight, working prototype</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-primary">Chrome & Edge</div>
              <div className="text-sm text-muted-foreground">Cross-browser compatibility</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-primary">AI-Powered</div>
              <div className="text-sm text-muted-foreground">Smart summaries & updates</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};