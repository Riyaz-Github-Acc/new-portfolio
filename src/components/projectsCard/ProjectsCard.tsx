'use client'

import { useEffect, useState } from 'react';
import { IconBrandAws, IconBrandDocker, IconBrandJavascript, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTypescript, IconBrandGithub, IconHexagonLetterE, IconWorld } from '@tabler/icons-react';
import { ScrollArea, Tooltip } from '@mantine/core';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import CustomScrollArea from '../CustomScrollArea';

import classes from './ProjectsCard.module.css';

interface ProjectDataProps {
  image: string
  title: string
  techStack: string
  description: string
  badges: string[]
}

interface BadgeEmojiProps {
  [key: string]: JSX.Element
}

interface BadgeColorProps {
  [key: string]: string
}

const badges = [
  { emoji: <IconBrandJavascript size={15} color='var(--mantine-color-yellow-7)' />, label: 'JavaScript', color: 'var(--mantine-color-yellow-7)' },
  { emoji: <IconBrandTypescript size={15} color='var(--mantine-color-blue-6)' />, label: 'TypeScript', color: 'var(--mantine-color-blue-6)' },
  { emoji: <IconBrandReact size={15} color='var(--mantine-color-blue-8)' />, label: 'React', color: 'var(--mantine-color-blue-8)' },
  { emoji: <IconBrandNextjs size={15} color='var(--mantine-color-dark-0)' />, label: 'NextJS', color: 'var(--mantine-color-dark-6)' },
  { emoji: <IconBrandNodejs size={15} color='var(--mantine-color-green-7)' />, label: 'NodeJS', color: 'var(--mantine-color-green-7)' },
  { emoji: <IconHexagonLetterE size={15} color='var(--mantine-color-gray-5)' />, label: 'ExpressJS', color: 'var(--mantine-color-gray-5)' },
  { emoji: <IconBrandDocker size={15} color='var(--mantine-color-blue-7)' />, label: 'Docker', color: 'var(--mantine-color-blue-7)' },
  { emoji: <IconBrandAws size={15} color='var(--mantine-color-orange-6)' />, label: 'AWS', color: 'var(--mantine-color-orange-6)' },
];

const projectData: ProjectDataProps[] = [
  {
    image: '/assets/images/mern-e-shop-admin.png',
    title: 'MernEShop Admin',
    techStack: 'MERN',
    description: 'MERNeShop Admin Dashboard serves as a centralized hub, providing real-time insights and empowering businesses to make informed decisions.',
    badges: ['JavaScript', 'TypeScript', 'React', 'NextJS', 'AWS']
  },
  {
    image: '/assets/images/mern-e-shop.png',
    title: 'MernEShop',
    techStack: 'MERN',
    description: "The Ecommerce Website let's you discover a wide array of products, effortlessly browse, apply advanced filters, and enjoy a seamless checkout experience.",
    badges: ['JavaScript', 'TypeScript', 'React', 'NodeJS', 'AWS', 'Docker']
  },
  {
    image: '/assets/images/recipe-app.png',
    title: 'Recipe App',
    techStack: 'React',
    description: 'A user-friendly recipe app where you can post, save, and delete recipes, build your collection, and discover new recipes from others for a seamless cooking experience.',
    badges: ['JavaScript', 'TypeScript', 'React', 'NextJS', 'ExpressJS']
  },
];

const badgeEmoji: BadgeEmojiProps = badges.reduce((lookup, badge) => {
  lookup[badge.label] = badge.emoji;
  return lookup;
}, {} as BadgeEmojiProps);

const badgeColor: BadgeColorProps = badges.reduce((lookup, badge) => {
  lookup[badge.label] = badge.color;
  return lookup;
}, {} as BadgeColorProps);

export function ProjectsCard() {
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
    <CustomScrollArea>
      <section className={classes.projectsContainer}>
        {projectData.map((project, i) => (
          <Card key={i} withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
              <Image src={project.image} alt={project.title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
              <Group justify="apart">
                <Text fz="lg" fw={500}>{project.title}</Text>
                <Badge size="sm" variant="light">{project.techStack}</Badge>
              </Group>
              <Text fz="sm" mt="xs">{project.description}</Text>
            </Card.Section>

            <Card.Section className={classes.section}>
              <Group gap={7} mt={5}>
                {project.badges.map((label, i) => (
                  <Badge key={i} leftSection={badgeEmoji[label]} color='var(--mantine-color-dark-9)' style={{ textTransform: 'none', padding: '10px' }}>{label}</Badge>
                ))}
              </Group>
            </Card.Section>

            <Group mt="xs">
              <Button variant='light' radius="md" style={{ flex: 1 }}>More Details</Button>
              <Tooltip label='Visit Website' position='top' transitionProps={{ duration: 0 }}>
                <a href='https://merneshop-admin.netlify.app/' target='_blank'>
                  <ActionIcon variant="default" radius="md" size={36}><IconWorld stroke={1.5} /></ActionIcon>
                </a>
              </Tooltip>
              <Tooltip label='Go To Repo' position='top' transitionProps={{ duration: 0 }}>
                <a href='https://github.com/Riyaz-Github-Acc/mern-e-shop-admin' target='_blank'>
                  <ActionIcon variant="default" radius="md" size={36}><IconBrandGithub stroke={1.5} /></ActionIcon>
                </a>
              </Tooltip>
            </Group>
          </Card>
        ))}
      </section>
    </CustomScrollArea>
  );
}
