import React from 'react'
import { List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const ExperienceSection = () => {
  return (
    <List
      mt={30}
      spacing="sm"
      size="sm"
      icon={
        <ThemeIcon size={20} radius="xl">
          <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
        </ThemeIcon>
      }
    >
      <List.Item>
        <b>TypeScript based</b> – build type safe applications, all components and hooks
        export types
      </List.Item>
      <List.Item>
        <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
        any project
      </List.Item>
      <List.Item>
        <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
        keyboard
      </List.Item>
    </List>
  )
}

export default ExperienceSection