import { useState } from "react";
import { ToggleSwitch } from "./ToggleSwitch";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Search, Bot } from "lucide-react";

export const HeroSection = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              ToggleDocs
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">Smarter, Faster, Maintainable</span> Documentation.
            <br />
            A browser extension that works like a VPN toggle—get AI-powered docs help only when you need it.
          </p>

          {/* Toggle Demo */}
          <div className="flex flex-col items-center space-y-8 mb-16">
            <div className="flex items-center space-x-6 p-8 rounded-2xl bg-card border border-border shadow-glow-secondary">
              <span className="text-lg font-medium">ToggleDocs Extension</span>
              <ToggleSwitch 
                isOn={isToggleOn} 
                onToggle={setIsToggleOn}
                className="scale-125"
              />
              <span className={`text-sm font-mono ${isToggleOn ? 'text-primary' : 'text-muted-foreground'}`}>
                {isToggleOn ? 'Active' : 'Inactive'}
              </span>
            </div>

            {/* Sidebar Preview */}
            <div className={`transition-all duration-700 ease-spring ${
              isToggleOn 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8 pointer-events-none'
            }`}>
              <div className="bg-card border border-border rounded-xl p-6 shadow-glow-primary max-w-md">
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Docs Copilot</span>
                </div>
                <div className="space-y-3 text-sm text-left">
                  <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span>TL;DR summaries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    <span>Q&A search</span>
                  </div>
                  <div className="bg-code-bg rounded-lg p-3 font-mono text-xs">
                    <div className="text-primary">// AI-suggested update</div>
                    <div className="text-muted-foreground">Update README.md based on</div>
                    <div className="text-muted-foreground">latest commits...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary group">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};