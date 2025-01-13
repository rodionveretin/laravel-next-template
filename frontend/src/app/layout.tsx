import type { Metadata } from 'next';
import '../../public/sass/globals.scss';

export const metadata: Metadata = {
 title: 'Home',
 description: 'Home page',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang='en'>
   <body className='wrapper'>{children}</body>
  </html>
 );
}
