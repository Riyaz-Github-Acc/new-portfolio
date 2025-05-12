'use client'

import { Card, Image, Text } from '@mantine/core'
import CustomScrollArea from '../CustomScrollArea'

import { IconCalendarMonth } from '@tabler/icons-react'
import classes from './ExperiencesCard.module.css'

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
              <div className={classes.roleSec}>
                <Text className={classes.role}>Web Developer</Text>
                <Text className={classes.duration}>
                  <IconCalendarMonth size={18} />Aug 2023 - Feb 2025
                </Text>
              </div>
            </div>
          </div>


          <div className={classes.cardPoints}>
            <ul>
              <li>
                Developed the FMGuardian project, an employee check-in and check-out system, using React, Node, Express, TypeScript, MySQL, and JWT tokens. Integrated Twilio for voice-based check-ins, where workers call a specific number to answer questions like name and DOB for check-ins and update check-out work status. Utilized Redux for state and API management. The system supports three user types: Admin, Corporate, and Manager.
              </li>

              <li>
                Worked as a full-stack developer for a Crypto Exchange
                platform, I built user interfaces with React, designed
                RESTful APIs, and managed databases using Node,
                TypeScript, and MySQL. And integrates Third Party APIs
                for cryptocurrency exchanges, ensures security with
                Firebase authentication and JWT tokens, and manages
                state with Redux.
              </li>

              <li>
                Developed a platform enabling users to send likes to
                preferred athletes for university recruitment. Utilized
                Next JS for front and backend, TypeScript, and Prisma
                for backend RESTful APIs and database management,
                Auth0 for secure authentication, Stripe for payment
                integration, and React Query for efficient data handling.
              </li>

              <li>
                Developed the Focusro browser extension using React, leveraging browser APIs and Manifest V3 to monitor user activity, track URLs, time spent on each site, start and end times, and overall browser usage.
              </li>
            </ul>
          </div>
        </Card>

        <Card p="md" radius="md" className={classes.card}>
          <div className={classes.cardTopSec}>
            <div className={classes.imgContainer}>
              <Image src='/assets/images/companies/designosoft-logo.png' alt='Designosoft' className={classes.image} />
            </div>
            <div className={classes.titleSec}>
              <div className={classes.roleSec}>
                <Text className={classes.role}>Frontend Developer</Text>
                <Text className={classes.duration}>
                  <IconCalendarMonth size={18} />Aug 2022 - May 2023
                </Text>
              </div>
            </div>
          </div>

          <div className={classes.cardPoints}>
            <ul>
              <li>
                Developed and maintained responsive and dynamic user interfaces using HTML, CSS, Bootstrap, and React JS, ensuring a seamless user experience across devices while promoting maintainable and scalable code.
              </li>
            </ul>
          </div>
        </Card>
      </section>
    </CustomScrollArea>
  )
}

export default ExperiencesCard