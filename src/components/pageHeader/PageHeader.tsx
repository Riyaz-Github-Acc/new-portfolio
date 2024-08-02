import React from 'react'
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

import classes from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  link?: string
}

const PageHeader = ({ title, link }: PageHeaderProps) => {
  return (
    <div className='page-header'>
      <h2 className='page-title'>{title}</h2>
      {link && <Link href={link} className={`div-center ${classes.viewAll}`}>
        <p>View All</p>
        <IconArrowRight />
      </Link>}
    </div>
  )
}

export default PageHeader