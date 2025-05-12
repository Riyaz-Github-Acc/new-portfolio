import { ContactCard } from '@/components/contactCard/ContactCard'
import PageHeader from '@/components/pageHeader/PageHeader'

const Contact = () => {
  return (
    <section className='page-container'>
      <PageHeader title='Contact' />
      <ContactCard />
    </section>
  )
}

export default Contact