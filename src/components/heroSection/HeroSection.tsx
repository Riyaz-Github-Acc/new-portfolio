'use client';

import { useState, useEffect } from 'react';
import { Image, Title, Button, Group, Text } from '@mantine/core';
import CustomScrollArea from '../CustomScrollArea';

import classes from './HeroSection.module.css';

// Custom hook to detect mobile devices
function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth <= 768);
  //   }

  //   handleResize();

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return isMobile;
}

export function HeroSection() {
  const isMobile = useMobile();

  const content = (
    <section className={classes.heroContainer}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Hi, I&apos;m <span className={classes.highlight}>Riyaz</span></Title>
          <Title className={classes.secondary}>Full Stack Developer</Title>
          <Text c="dimmed" mt="md">
            To leverage my expertise in full-stack development, including React, Node.js, Express, MongoDB, MySQL, PostgreSQL, and TypeScript, to design and build scalable, high-performance web applications. I aim to contribute to a dynamic team by delivering innovative, robust solutions that enhance user experiences and support business growth.
          </Text>

          <Group mt={30}>
            <a href='/assets/images/Resume.pdf' target='_blank'>
              <Button radius="xl" size="md" className={classes.control}>
                Download Resume
              </Button>
            </a>
          </Group>
        </div>
        <div className={classes.image}>
          <Image src='/assets/images/profile/profile-pic-1.jpg' alt='hero-img' />
        </div>
      </div>
    </section>
  );

  return isMobile ? <CustomScrollArea>{content}</CustomScrollArea> : content;
}
