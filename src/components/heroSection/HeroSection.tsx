'use client';

import { useState, useEffect } from 'react';
import { Image, Title, Button, Group, Text } from '@mantine/core';
import CustomScrollArea from '../CustomScrollArea';

import classes from './HeroSection.module.css';

// Custom hook to detect mobile devices
function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export function HeroSection() {
  const isMobile = useMobile();

  const content = (
    <section className={classes.heroContainer}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Hi, I'm <span className={classes.highlight}>Riyaz</span></Title>
          <Title className={classes.secondary}>Full Stack Developer</Title>
          <Text c="dimmed" mt="md">
            A highly motivated and skilled MERN Stack Developer with a passion for building innovative and user-friendly web applications. Proven ability to learn new technologies quickly and apply them to real-world projects. Strong communication and problem-solving skills.
          </Text>

          <Group mt={30}>
            <a href='/assets/images/Resume.pdf' target='_blank'>
              <Button radius="xl" size="md" className={classes.control}>
                Download Resume
              </Button>
            </a>
          </Group>
        </div>
        <Image src='/assets/images/hero-img.png' className={classes.image} />
      </div>
    </section>
  );

  return isMobile ? <CustomScrollArea>{content}</CustomScrollArea> : content;
}
