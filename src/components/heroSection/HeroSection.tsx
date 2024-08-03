'use client';

import { useState, useEffect } from 'react';
import { Image, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
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
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br /> components library
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </List.Item>
            <List.Item>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
              any project
            </List.Item>
            <List.Item>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
        <Image src='https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg' className={classes.image} />
      </div>
    </section>
  );

  return isMobile ? <CustomScrollArea>{content}</CustomScrollArea> : content;
}
