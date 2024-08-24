import React from 'react'
import PageHeader from '@/components/pageHeader/PageHeader'
import ExperiencesCard from '@/components/experiencesCard/ExperiencesCard'

const Experience = () => {
  return (
    <section className='page-container'>
      <PageHeader title='Experience' />
      <ExperiencesCard />
    </section>
  )
}

export default Experience