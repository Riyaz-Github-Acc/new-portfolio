
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Navbar } from '@/components/navbar/Navbar';

import '@mantine/core/styles.css';
import './globals.css'

export const metadata = {
  title: 'Riyaz | Developer Portfolio',
  description: "Hi this is Riyaz & it's my Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
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