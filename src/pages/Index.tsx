import React from "react";
import PillarCard from "@/components/PillarCard";
import { pillars } from "@/data/pillars";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative">
      <div className="absolute inset-0 bg-gradient-overlay pointer-events-none"></div>
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <header className="text-center mb-12 md:mb-16 space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Consulta <span className="text-primary">VENTUR</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Protocolo completo de avaliação para seu bem-estar integral
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PillarCard
                id={pillar.id}
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
                color={pillar.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
