
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import VerseReveal from '../components/VerseReveal';
import { getPoemaById } from '../data/poemas';
import { ArrowLeft, BookOpen, Play, Pause } from 'lucide-react';

const Poema = () => {
  const { id } = useParams();
  const poema = getPoemaById(id || '');
  const [isRevealing, setIsRevealing] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  if (!poema) {
    return (
      <div className="min-h-screen gradient-warm">
        <Navigation />
        <div className="pt-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Poema não encontrado</h1>
            <Link to="/poemas" className="text-primary hover:underline">
              Voltar aos poemas
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const temaBackgrounds = {
    earth: 'from-earth-50 via-earth-25 to-orange-50',
    water: 'from-water-50 via-blue-25 to-sky-50',
    sage: 'from-sage-50 via-green-25 to-emerald-50'
  };

  const handleRevealToggle = () => {
    setIsRevealing(!isRevealing);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${temaBackgrounds[poema.tema]}`}>
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <Link 
              to="/poemas" 
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span>Voltar aos poemas</span>
            </Link>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {poema.title}
              </h1>
              {poema.subtitle && (
                <p className="text-xl text-muted-foreground mb-4 italic">
                  {poema.subtitle}
                </p>
              )}
              <p className="text-muted-foreground">
                Inspirado em: <em className="text-primary font-medium">{poema.inspiradoEm}</em>
              </p>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center mb-12">
            <button
              onClick={handleRevealToggle}
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              {isRevealing ? <Pause size={20} /> : <Play size={20} />}
              <span>{isRevealing ? 'Pausar revelação' : 'Revelar versos'}</span>
            </button>
          </div>

          {/* Poem Content */}
          <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg paper-texture">
            <div className="max-w-2xl mx-auto">
              {isRevealing ? (
                <VerseReveal verses={poema.verses} delay={1000} />
              ) : (
                <div className="space-y-4">
                  {poema.verses.map((verse, index) => (
                    <div key={index} className="verse-line text-lg leading-relaxed">
                      {verse || '\u00A0'} {/* Non-breaking space for empty verses */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Notes Section */}
          {(poema.nota || poema.contexto) && (
            <div className="mt-12">
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="flex items-center space-x-2 mx-auto text-primary hover:text-primary/80 transition-colors"
              >
                <BookOpen size={20} />
                <span>{showNotes ? 'Ocultar notas' : 'Ver notas do autor'}</span>
              </button>
              
              {showNotes && (
                <div className="mt-6 bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto animate-fade-in">
                  {poema.nota && (
                    <div className="mb-4">
                      <h3 className="font-semibold text-foreground mb-2">Nota do autor:</h3>
                      <p className="text-muted-foreground leading-relaxed">{poema.nota}</p>
                    </div>
                  )}
                  {poema.contexto && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Contexto:</h3>
                      <p className="text-muted-foreground leading-relaxed">{poema.contexto}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Navigation to other poems */}
          <div className="mt-16 text-center">
            <Link
              to="/poemas"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-6 py-3 hover:border-primary"
            >
              <BookOpen size={20} />
              <span>Explorar outros poemas</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poema;
