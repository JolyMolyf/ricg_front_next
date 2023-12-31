import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './redux/provider';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const TOKEN = process.env.API_TOKEN;

  // For GET requests
  axios.interceptors.request.use(
    (req) => {
      // Add configurations here
      req.headers.Authorization = 'bearer ' + TOKEN;
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // For POST requests
  axios.interceptors.response.use(
    (res) => {
      // Add configurations here
      if (res.status === 201 || res.status === 200) {
          console.log('Posted Successfully');
      }
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return (
    <html lang="en">
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  )
}
