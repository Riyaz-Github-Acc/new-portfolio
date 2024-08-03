import React from 'react'
import PageHeader from '@/components/pageHeader/PageHeader'
import { CertificatesCard } from '@/components/certificatesCard/certificatesCard'

const Certificates = () => {
  return (
    <section className='page-container'>
      <PageHeader title='Certificates' />
      <CertificatesCard />
    </section>
  )
}

export default Certificates