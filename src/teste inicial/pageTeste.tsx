'use client';

import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import axios, { AxiosError } from 'axios';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const handleGetCnpj = async () => {
    try {
      const response = await axios.post('/api/hello/', {
        cnpj: '04430502000103',
      });
      console.log(response);
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={handleGetCnpj}>Pesquisar CNPJ</button>
      </div>
    </main>
  );
}
