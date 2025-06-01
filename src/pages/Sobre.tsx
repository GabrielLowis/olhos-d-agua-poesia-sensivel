
import React from 'react';
import Navigation from '../components/Navigation';
import { Heart, BookOpen } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen gradient-warm">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre este projeto
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* About the Project */}
            <section className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border paper-texture animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="text-primary" size={24} />
                <h2 className="text-2xl font-semibold text-foreground">Uma homenagem necessária</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Este projeto nasceu do encontro profundo com a obra <em>"Olhos d'Água"</em> de Conceição Evaristo. 
                  Cada conto lido foi uma janela aberta para universos de sensibilidade, resistência e humanidade 
                  que me tocaram de forma indelével.
                </p>
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Os três poemas aqui apresentados não tentam replicar ou substituir a genialidade de Conceição Evaristo. 
                  Eles são, antes, ecos pessoais — tentativas sinceras de dialogar poeticamente com histórias que 
                  transformaram minha forma de ver o mundo.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  É um exercício de gratidão, de reconhecimento e de celebração à literatura que nos ensina 
                  sobre empatia, sobre a força das narrativas periféricas e sobre a beleza que existe 
                  mesmo nas histórias mais dolorosas.
                </p>
              </div>
            </section>

            {/* About Conceição Evaristo */}
            <section className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border paper-texture animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="text-primary" size={24} />
                <h2 className="text-2xl font-semibold text-foreground">Conceição Evaristo</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Conceição Evaristo é uma das vozes mais importantes da literatura brasileira contemporânea. 
                  Nascida em 1946, em Belo Horizonte, ela construiu uma obra que dá visibilidade às experiências 
                  de mulheres negras e periféricas no Brasil.
                </p>
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  <em>"Olhos d'Água"</em>, publicado em 2014, é uma coletânea de contos que revela a potência 
                  narrativa da autora. Com uma escrita delicada e profunda, Conceição constrói personagens 
                  complexas e humanas, cujas histórias nos fazem refletir sobre questões sociais fundamentais.
                </p>

                <p className="text-foreground/80 leading-relaxed">
                  Sua literatura é um ato de resistência e de amor — amor às histórias não contadas, 
                  às vozes silenciadas e à beleza que existe nas vidas comuns e extraordinárias 
                  de quem luta para existir com dignidade.
                </p>
              </div>
            </section>

            {/* About the Reading Experience */}
            <section className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border paper-texture animate-fade-in">
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Uma experiência de leitura contemplativa
              </h2>
              
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Este site foi pensado como um espaço de contemplação e diálogo. Cada poema pode ser 
                  lido em seu próprio ritmo, com a opção de revelação gradual dos versos para uma 
                  experiência mais meditativa.
                </p>
                
                <p className="text-foreground/80 leading-relaxed">
                  Que estes poemas sirvam como uma ponte entre a obra de Conceição Evaristo e sua 
                  própria reflexão, criando novos espaços para o diálogo sobre literatura, memória e identidade.
                </p>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
              <p className="text-lg text-foreground mb-4">
                "A literatura pode ser um espaço de encontro e de cura."
              </p>
              <p className="text-muted-foreground">
                — Uma reflexão inspirada na obra de Conceição Evaristo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
