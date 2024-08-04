'use client'

import React from 'react'
import CustomScrollArea from '../CustomScrollArea'
import { Card, Image, Text } from '@mantine/core'

import classes from './SkillsCard.module.css'

const skills = [
  { icon: '/assets/images/tech/javascript.png', name: 'JavaScript' },
  { icon: '/assets/images/tech/reactjs.png', name: 'React' },
  { icon: '/assets/images/tech/nextjs.png', name: 'Next' },
  { icon: '/assets/images/tech/reactjs.png', name: 'React Native' },
  { icon: '/assets/images/tech/html.png', name: 'HTML' },
  { icon: '/assets/images/tech/css.png', name: 'CSS' },
  { icon: '/assets/images/tech/bootstrap.png', name: 'Bootstrap' },
  { icon: '/assets/images/tech/tailwind.png', name: 'Tailwind' },

  { icon: '/assets/images/tech/nodejs.png', name: 'Node' },
  { icon: '/assets/images/tech/expressjs.png', name: 'Express' },
  { icon: '/assets/images/tech/typescript.png', name: 'TypeScript' },
  { icon: '/assets/images/tech/firebase.png', name: 'Firebase' },

  { icon: '/assets/images/tech/postgresql.png', name: 'PostgreSQL' },
  { icon: '/assets/images/tech/mysql.png', name: 'MySQL' },
  { icon: '/assets/images/tech/mongodb.png', name: 'MongoDB' },
  { icon: '/assets/images/tech/redis.png', name: 'Redis' },

  { icon: '/assets/images/tech/linux.png', name: 'Linux' },
  { icon: '/assets/images/tech/docker.png', name: 'Docker' },
  { icon: '/assets/images/tech/kubernetes.png', name: 'Kubernetes' },
  { icon: '/assets/images/tech/aws.png', name: 'AWS' },
  { icon: '/assets/images/tech/jenkins.png', name: 'Jenkins' },
  { icon: '/assets/images/tech/git.png', name: 'Git' },
  { icon: '/assets/images/tech/github.png', name: 'GitHub' },
  { icon: '/assets/images/tech/prometheus.png', name: 'Prometheus' },
]

const SkillsCard = () => {
  return (
    <CustomScrollArea>
      <section className={classes.skillsContainer}>
        {skills.map(skill => (
          <Card key={skill.name} p="md" radius="md" className={classes.card}>
            <div className={classes.imgContainer}>
            <Image src={skill.icon} alt={skill.name} className={classes.image} />
            </div>
            <Text>{skill.name}</Text>
          </Card>
        ))}
      </section>
    </CustomScrollArea>
  )
}

export default SkillsCard