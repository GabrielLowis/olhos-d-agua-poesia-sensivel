
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PoemCardProps {
  id: string;
  title: string;
  excerpt: string;
  inspiradoEm: string;
  tema: 'earth' | 'water' | 'sage';
}

const PoemCard: React.FC<PoemCardProps> = ({ id, title, excerpt, inspiradoEm, tema }) => {
  const temaClasses = {
    earth: 'from-violet-900/20 to-midnight-100/30 border-violet-700/30 hover:border-violet-500/50',
    water: 'from-cosmic-200/20 to-violet-800/30 border-cosmic-400/30 hover:border-violet-400/50',
    sage: 'from-midnight-200/20 to-cosmic-300/30 border-cosmic-500/30 hover:border-primary/50'
  };

  return (
    <Link to={`/poema/${id}`} className="block group">
      <div className={`bg-gradient-to-br ${temaClasses[tema]} border-2 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:transform hover:scale-[1.02] paper-texture glow`}>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            Inspirado em: <em className="text-primary/80">{inspiradoEm}</em>
          </p>
        </div>
        
        <div className="mb-4">
          <p className="text-foreground/80 leading-relaxed italic">
            {excerpt}
          </p>
        </div>
        
        <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
          <span>Ler poema completo</span>
          <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default PoemCard;
