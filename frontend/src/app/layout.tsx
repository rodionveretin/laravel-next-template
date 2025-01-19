import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { AuthProvider } from '../context/AuthContext';

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
  <html lang='ru'>
   <body>
    <div className='wrapper'>
     <Header />
     <main>{children}</main>
     <Footer />
    </div>
   </body>
  </html>
 );
}
