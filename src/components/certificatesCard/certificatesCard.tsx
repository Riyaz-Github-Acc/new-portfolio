'use client'

import { Card, Image, Text, Group, AspectRatio, Badge } from '@mantine/core';
import classes from './CertificatesCard.module.css';
import CustomScrollArea from '../CustomScrollArea';

const certificateDetails = [
  {
    institute: 'Udemy',
    title: 'React',
    img: '/assets/images/certificates/react-js.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis quae quo, quidem error cupiditate iste dolorum perferendis repudiandae provident!'
  },
  {
    institute: 'Udemy',
    title: 'Node, Express & MongoDB',
    img: '/assets/images/certificates/node-js.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis quae quo, quidem error cupiditate iste dolorum perferendis repudiandae provident!'
  },
  {
    institute: 'Adoro Multimedia',
    title: 'UI/UX Design',
    img: '/assets/images/certificates/adoro-multimedia.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis quae quo, quidem error cupiditate iste dolorum perferendis repudiandae provident!'
  },
  {
    institute: 'Udemy',
    title: 'React Native',
    img: '/assets/images/certificates/react-native.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis quae quo, quidem error cupiditate iste dolorum perferendis repudiandae provident!'
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