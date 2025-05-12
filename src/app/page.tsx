import { HeroSection } from '@/components/heroSection/HeroSection'
import { ActionIcon } from '@mantine/core'
import { IconBrandGithub, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'
import classes from './page.module.css'

const Home = () => {
  return (
    <section className='page-container'>
      {/* <PageHeader title='About Me' /> */}
      <div className={classes.topBar}>
        <a href='https://github.com/Riyaz-Github-Acc/mern-e-shop-admin' target='_blank' className={classes.topBarLinks}>
          <ActionIcon variant="default" radius="lg" size={20}>
            <IconBrandGithub stroke={1.5} />
          </ActionIcon>
          <p>GitHub</p>
        </a>

        <a href='mailto:riyazofficial0@gmail.com' className={classes.topBarLinks}>
          <ActionIcon variant="default" radius="lg" size={20}>
            <IconMail stroke={1.5} />
          </ActionIcon>
          <p>riyazofficial0@gmail.com</p>
        </a>

        <a href='tel:+918270474125' target='_blank' className={classes.topBarLinks}>
          <ActionIcon variant="default" radius="lg" size={20}>
            <IconPhone stroke={1.5} />
          </ActionIcon>
          <p>8270474125</p>
        </a>

        <a href='https://www.google.com/maps/search/?api=1&query=Coimbatore,+TamilNadu' target='_blank' className={classes.topBarLinks}>
          <ActionIcon variant="default" radius="lg" size={20}>
            <IconMapPin stroke={1.5} />
          </ActionIcon>
          <p>Coimbatore, TamilNadu</p>
        </a>
      </div>
      <HeroSection />
    </section>
  )
}

export default Home