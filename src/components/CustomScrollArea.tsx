import { ScrollArea } from '@mantine/core';
import React, { useEffect, useState } from 'react';

interface CustomScrollAreaProps {
  children: React.ReactNode;
}

const CustomScrollArea: React.FC<CustomScrollAreaProps> = ({ children }) => {
  const [maxHeight, setMaxHeight] = useState('calc(100vh - 9.5rem)');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      if (window.innerWidth < 600) {
        setMaxHeight('calc(100vh - 11.5rem)'); // smaller offset on mobile
      } else {
        setMaxHeight('calc(100vh - 9.5rem)');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScrollArea
      style={{
        maxHeight,
        height: maxHeight, // fix height to enable scrolling
      }}
    >
      {children}
    </ScrollArea>
  );
};

export default CustomScrollArea;
