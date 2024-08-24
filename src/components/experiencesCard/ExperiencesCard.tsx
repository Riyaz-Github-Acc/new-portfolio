'use client'

import React from 'react'
import CustomScrollArea from '../CustomScrollArea'
import { Card, Image, Text } from '@mantine/core'

import classes from './ExperiencesCard.module.css'
import { IconCalendarMonth } from '@tabler/icons-react'

const ExperiencesCard = () => {
  return (
    <CustomScrollArea>
      <section className={classes.experiencesContainer}>
        <Card p="md" radius="md" className={classes.card}>
          <div className={classes.cardTopSec}>
            <div className={classes.imgContainer}>
              <Image src='/assets/images/companies/blaze-logo.png' alt='Blaze' className={classes.image} />
            </div>
            <div className={classes.titleSec}>
              {/* <Text>Blaze Web Services</Text> */}
              {/* <div className={classes.roleSec}> */}
                <Text className={classes.role}>Web Developer</Text>
                <Text className={classes.duration}><IconCalendarMonth size={18} />Aug 2023 - Present</Text>
              {/* </div> */}
            </div>
          </div>

          <div className={classes.cardPoints}>
            <ul>
              <li>FMGuardian</li>
              <li>Worked as a full-stack developer for a Crypto Exchange
                platform, I built user interfaces with React, designed
                RESTful APIs, and managed databases using Node,
                TypeScript, and MySQL. And integrates Third Party APIs
                for cryptocurrency exchanges, ensures security with
                Firebase authentication and JWT tokens, and manages
                state with Redux.</li>

              <li>Developed a platform enabling users to send likes to
                preferred athletes for university recruitment. Utilized
                Next JS for front and backend, TypeScript, and Prisma
                for backend RESTful APIs and database management,
                Auth0 for secure authentication, Stripe for payment
                integration, and React Query for efficient data handling.</li>

              <li>FocusRO Browser Extension</li>
            </ul>
          </div>
        </Card>

        <Card p="md" radius="md" className={classes.card}>
          <div className={classes.cardTopSec}>
            <div className={classes.imgContainer}>
              <Image src='/assets/images/companies/designosoft-logo.png' alt='Blaze' className={classes.image} />
            </div>
            <div className={classes.titleSec}>
              {/* <Text>Blaze Web Services</Text> */}
              {/* <div className={classes.roleSec}> */}
                <Text className={classes.role}>Front End Developer</Text>
                <Text className={classes.duration}><IconCalendarMonth size={18} />Aug 2022 - May 2023</Text>
              {/* </div> */}
            </div>
          </div>

          <div className={classes.cardPoints}>
            <ul>
              <li>FMGuardian</li>
              <li>Worked as a full-stack developer for a Crypto Exchange
                platform, I built user interfaces with React, designed
                RESTful APIs, and managed databases using Node,
                TypeScript, and MySQL. And integrates Third Party APIs
                for cryptocurrency exchanges, ensures security with
                Firebase authentication and JWT tokens, and manages
                state with Redux.</li>

              <li>Developed a platform enabling users to send likes to
                preferred athletes for university recruitment. Utilized
                Next JS for front and backend, TypeScript, and Prisma
                for backend RESTful APIs and database management,
                Auth0 for secure authentication, Stripe for payment
                integration, and React Query for efficient data handling.</li>

              <li>FocusRO Browser Extension</li>
            </ul>
          </div>
        </Card>
      </section>
    </CustomScrollArea>
  )
}

export default ExperiencesCard