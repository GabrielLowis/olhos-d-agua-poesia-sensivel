
import React from 'react';
import Navigation from '../components/Navigation';
import PoemCard from '../components/PoemCard';
import { poemas } from '../data/poemas';

const Poemas = () => {
  return (
    <div className="min-h-screen gradient-cool">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Os Poemas
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Três vozes poéticas em diálogo com <em>Olhos d'Água</em>
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poemas.map((poema, index) => (
              <div
                key={poema.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <PoemCard
                  id={poema.id}
                  title={poema.title}
                  excerpt={poema.excerpt}
                  inspiradoEm={poema.inspiradoEm}
                  tema={poema.tema}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border max-w-2xl mx-auto paper-texture">
              <p className="text-muted-foreground italic">
                "Cada poema carrega em si a força de uma história maior, 
                ecoando as vozes que Conceição Evaristo nos ensinou a escutar."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poemas;
