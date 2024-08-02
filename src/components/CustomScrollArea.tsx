import React, { useEffect, useState } from 'react'
import { ScrollArea } from '@mantine/core';

interface CustomScrollAreaProps {
  children: React.ReactNode
}

const CustomScrollArea: React.FC<CustomScrollAreaProps> = ({children}) => {
  const [scrollAreaHeight, setScrollAreaHeight] = useState({ height: 'calc(100vh - 9.5rem)' });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScrollAreaHeight({ height: 'calc(100vh - 7.5rem)' });
      } else {
        setScrollAreaHeight({ height: 'calc(100vh - 9.5rem)' });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <ScrollArea style={scrollAreaHeight}>
      {children}
    </ScrollArea>
  )
}

export default CustomScrollArea