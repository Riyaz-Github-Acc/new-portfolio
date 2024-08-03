import React from 'react'
import PageHeader from '@/components/pageHeader/PageHeader'
import { HeroSection } from '@/components/heroSection/HeroSection'

const Home = () => {
  return (
    <section className='page-container'>
      {/* <PageHeader title='About Me' /> */}
      <HeroSection />
    </section>
  )
}

export default Home