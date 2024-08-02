import React from 'react'
import PageHeader from '@/components/pageHeader/PageHeader'
import { ProjectsCard } from '@/components/projectsCard/ProjectsCard'

const Projects = () => {
  return (
    <section className='page-container'>
      <PageHeader title='Projects' />
      <ProjectsCard />
    </section>
  )
}

export default Projects