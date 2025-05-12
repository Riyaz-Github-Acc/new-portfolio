
import { Navbar } from '@/components/navbar/Navbar';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import './globals.css';

export const metadata = {
  title: 'Riyaz | Developer Portfolio',
  description: "Hi this is Riyaz & it's my Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const colorScheme = 'dark';

  return (
    <html lang="en" data-mantine-color-scheme={colorScheme}>
      <head>
        <ColorSchemeScript defaultColorScheme='dark' />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <Navbar />
          <div className='main'>
            {children}
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}