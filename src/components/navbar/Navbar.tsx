'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import { IconDeviceDesktopAnalytics, IconUser, IconPhone, IconCode, IconCertificate, IconBriefcase } from '@tabler/icons-react';
import { ThemeToggle } from '../themeToggle/ThemeToggle';

import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconUser
  label: string
  link: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon: Icon, label, link, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <Link href={link}>
        <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </UnstyledButton>
      </Link>
    </Tooltip>
  );
}

const menuLinks = [
  { icon: IconUser, link: '/', label: 'About' },
  { icon: IconBriefcase, link: '/experience', label: 'Experience' },
  { icon: IconCode, link: '/skills', label: 'Skills' },
  { icon: IconCertificate, link: '/certificates', label: 'Certificates' },
  { icon: IconDeviceDesktopAnalytics, link: '/projects', label: 'Projects' },
  { icon: IconPhone, link: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [active, setActive] = useState(0);

  const links = menuLinks.map((menuLink, index) => (
    <NavbarLink
      {...menuLink}
      link={menuLink.link}
      key={menuLink.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {window.innerWidth > 600 ? <Stack justify="center" gap={0}>
          {links}
          <ThemeToggle />
        </Stack> : <>links <ThemeToggle /></>}
         {/* {links} */}
      </div>
    </nav>
  );
}