import { useState } from "react";
import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
  className?: string;
}

export const ToggleSwitch = ({ isOn, onToggle, className }: ToggleSwitchProps) => {
  return (
    <button
      onClick={() => onToggle(!isOn)}
      className={cn(
        "relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 ease-spring focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        isOn ? "bg-primary shadow-glow-primary" : "bg-toggle-bg",
        className
      )}
      aria-pressed={isOn}
      role="switch"
    >
      <span className="sr-only">Toggle ToggleDocs</span>
      <span
        className={cn(
          "inline-block h-6 w-6 rounded-full bg-foreground transition-all duration-300 ease-spring shadow-lg",
          isOn ? "translate-x-9" : "translate-x-1"
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn(
          "text-xs font-mono font-bold transition-all duration-200",
          isOn ? "text-primary-foreground" : "text-muted-foreground"
        )}>
          {isOn ? "ON" : "OFF"}
        </span>
      </div>
    </button>
  );
};