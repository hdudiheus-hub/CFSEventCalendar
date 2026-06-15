import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CF Sport Athlete Commerce Platform',
  description:
    'A fighter-powered commerce ecosystem for supplements, affiliate attribution, CRM automation, and sponsorship reporting.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
