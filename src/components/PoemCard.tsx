
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
    earth: 'from-earth-50 to-earth-100 border-earth-200 hover:border-earth-300',
    water: 'from-water-50 to-water-100 border-water-200 hover:border-water-300',
    sage: 'from-sage-50 to-sage-100 border-sage-200 hover:border-sage-300'
  };

  return (
    <Link to={`/poema/${id}`} className="block group">
      <div className={`bg-gradient-to-br ${temaClasses[tema]} border-2 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02] paper-texture`}>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            Inspirado em: <em>{inspiradoEm}</em>
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
