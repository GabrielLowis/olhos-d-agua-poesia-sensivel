
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { BookOpen, ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen gradient-warm">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ecos de <span className="text-primary">Olhos d'Água</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Três poemas inspirados na obra de <em>Conceição Evaristo</em>
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-foreground/80 leading-relaxed mb-8 breathe">
            "Os olhos de Conceição Evaristo não eram só para chorar. Eram também para ver, para revelar, para denunciar."
          </blockquote>
          <p className="text-muted-foreground text-lg">
            Uma homenagem poética à sensibilidade e força da literatura de Conceição Evaristo
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border paper-texture">
            <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
              Uma Jornada Poética
            </h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Esta coleção nasceu da profunda admiração pela obra <em>"Olhos d'Água"</em> de Conceição Evaristo. 
                Cada poema aqui presente é uma resposta sensível e pessoal aos contos que tocaram minha alma 
                e me fizeram refletir sobre memória, resistência e identidade.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Através de versos que dialogam com a prosa de Conceição, busco honrar não apenas 
                a beleza literária de sua obra, mas também a força transformadora de suas palavras.
              </p>
              <div className="animate-float">
                <ArrowDown className="mx-auto text-primary mb-4" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <Link
            to="/poemas"
            className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <BookOpen size={24} />
            <span>Descobrir os Poemas</span>
          </Link>
          
          <p className="mt-6 text-muted-foreground">
            Três poemas, três universos, uma única essência
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-background/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Com respeito e admiração à obra de <strong>Conceição Evaristo</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
