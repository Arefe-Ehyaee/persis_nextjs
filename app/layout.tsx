import './globals.css';
import { ReactNode } from "react";
import MainHeader from "@/components/main-header/main-header";
import Head from 'next/head';

export const metadata = {
  title: 'Persis',
  description: 'Your intelligent assistant for tasks and support, all in Persian.',
};
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa">
      <body className='bg-[#043873]'>
        <MainHeader></MainHeader>
        {children}
      </body>
    </html>
  );
}
