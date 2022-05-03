import Head from 'next/head';
import Link from 'next/link';
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheq - Pay later, anywhere</title>
      </Head>
      <main>
        <h1 className={styles.mainTitle}>Cheq - coming soon</h1>
        <Link href="/apply"><a>Apply now</a></Link>
      </main>        
    </>
  )
}
