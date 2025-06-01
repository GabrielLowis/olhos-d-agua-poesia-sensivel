
import React, { useState, useEffect } from 'react';

interface VerseRevealProps {
  verses: string[];
  delay?: number;
}

const VerseReveal: React.FC<VerseRevealProps> = ({ verses, delay = 800 }) => {
  const [visibleVerses, setVisibleVerses] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleVerses(prev => {
        if (prev < verses.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, delay);

    return () => clearInterval(timer);
  }, [verses.length, delay]);

  return (
    <div className="space-y-4">
      {verses.map((verse, index) => (
        <div
          key={index}
          className={`verse-line text-lg leading-relaxed transition-all duration-1000 ${
            index < visibleVerses 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {verse}
        </div>
      ))}
    </div>
  );
};

export default VerseReveal;
