
import React from 'react';

interface AnimatedBackgroundProps {
  condition: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ condition }) => {
  const renderRaindrops = () => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="absolute w-0.5 h-8 bg-blue-400/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${1 + Math.random()}s`,
          animation: `rain-fall ${1 + Math.random()}s linear infinite`
        }}
      />
    ));
  };

  const renderClouds = () => {
    return Array.from({ length: 3 }, (_, i) => (
      <div
        key={i}
        className="absolute w-32 h-16 bg-white/10 rounded-full blur-sm animate-pulse"
        style={{
          left: `${20 + i * 30}%`,
          top: `${10 + i * 5}%`,
          animationDelay: `${i * 0.5}s`,
          animation: `cloud-drift 20s linear infinite`
        }}
      />
    ));
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {condition.toLowerCase().includes('rain') && renderRaindrops()}
      {condition.toLowerCase().includes('cloud') && renderClouds()}
      
      {condition.toLowerCase().includes('sun') && (
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse" />
      )}
    </div>
  );
};
