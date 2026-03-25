import { AnimatePresence } from 'framer-motion';
import { Inter } from 'next/font/google';
import Layout from '../components/Layout';
import '../styles/globals.css';

// Initialize the Inter font for ultra-crisp typography
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function MyApp({ Component, pageProps, router }) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Layout>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </div>
  );
}
