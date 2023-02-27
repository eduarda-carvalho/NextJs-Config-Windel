'use client';

import React, { ReactNode } from 'react';
import Navbar from './design/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
