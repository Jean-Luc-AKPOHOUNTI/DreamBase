import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-neutral-900">
      {children}
    </div>
  );
};

export default MainLayout;
