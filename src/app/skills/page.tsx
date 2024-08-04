import React from 'react'
import PageHeader from '@/components/pageHeader/PageHeader'
import SkillsCard from '@/components/skillsCard/SkillsCard'

const Skills = () => {
  return (
    <section className='page-container'>
      <PageHeader title='Skills' />
      <SkillsCard />
    </section>
  )
}

export default Skills