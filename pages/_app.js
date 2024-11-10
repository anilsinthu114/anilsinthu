import '../styles/globals.css';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

/**
 * The App component is the top-level component of the application.
 * It wraps the entire application in a motion.div for smooth transitions.
 * It also includes the Script component for tracking and analysis.
 * 
 * @param {Object} Component - The component to be rendered.
 * @param {Object} pageProps - The props passed to the page component.
 * @returns {JSX.Element} The App component.
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Anil Sinthu</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Anil Sinthu's Portfolio" />
        <meta property="og:image" content="https://anilsinthu.vercel.app"></meta>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
        <Analytics />
      </motion.div>
    </>
  );
}
