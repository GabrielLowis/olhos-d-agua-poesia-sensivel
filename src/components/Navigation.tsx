
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, User } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Início', icon: Home },
    { path: '/poemas', label: 'Poemas', icon: BookOpen },
    { path: '/sobre', label: 'Sobre', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-bold text-primary hover:text-primary/80 transition-colors">
            Ecos de Olhos d'Água
          </Link>
          
          <div className="flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 text-sm font-medium font-sans transition-all hover:text-primary hover:scale-105 ${
                  location.pathname === path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
