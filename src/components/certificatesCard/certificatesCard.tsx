'use client'

import { Card, Image, Text, Group, AspectRatio, Badge } from '@mantine/core';
import classes from './CertificatesCard.module.css';
import CustomScrollArea from '../CustomScrollArea';

const certificateDetails = [
  {
    institute: 'Udemy',
    title: 'React',
    img: '/assets/images/certificates/react-js.jpg',
    desc: 'Completed a comprehensive course on React, covering core concepts such as component-based architecture, hooks, state management, and advanced patterns.'
  },
  {
    institute: 'Udemy',
    title: 'Node, Express & MongoDB',
    img: '/assets/images/certificates/node-js.jpg',
    desc: 'Completed a course on Node.js, Express, and MongoDB, focusing on building scalable backend applications, designing RESTful APIs, and managing data effectively.'
  },
  {
    institute: 'Adoro Multimedia',
    title: 'UI/UX Design',
    img: '/assets/images/certificates/adoro-multimedia.jpg',
    desc: 'Completed a course on UI and UX design, mastering the principles of user-centered design and creating intuitive, aesthetically pleasing interfaces.'
  },
  {
    institute: 'Udemy',
    title: 'React Native',
    img: '/assets/images/certificates/react-native.jpg',
    desc: 'Completed a course on React Native, focusing on building cross-platform mobile applications, integrating native modules, and optimizing performance for both iOS and Android platforms.'
  },
]

export function CertificatesCard() {
  return (
    <CustomScrollArea>
      <section className={classes.certificatesContainer}>
        {certificateDetails.map(certificate => (
          <Card key={certificate.title} p="md" radius="md" component="a" href={certificate.img} target='_blank' className={classes.card}>
            <div>
              <AspectRatio ratio={1920 / 1080}>
                <Image src={certificate.img} alt={certificate.title} />
              </AspectRatio>
            </div>

            <div>
              <Badge size="sm" variant="light">{certificate.institute}</Badge>
              <Text className={classes.title} mt={5}>{certificate.title}</Text>
              <Text c="dimmed" size="xs" fw={700} mt="xs">{certificate.desc}</Text>
            </div>
          </Card>
        ))}
      </section>
    </CustomScrollArea>
  );
}