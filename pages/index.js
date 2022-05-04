import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { About, Partners, Wrapper } from "../components";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheq - Pay later, anywhere</title>
      </Head>
      <main className={styles.mainSection}>
        <Wrapper>
          <h1 className={styles.mainTitle}>Pay later, {'\n'} anywhere</h1>
          <p className={styles.mainDescription}>Buy now, pay later at 15 Million+ merchants across India using UPI</p>
          <Link href="/apply">
            <a className={styles.mainButton}>
              Join now
              <span className={styles.mainButtonImage}>
                <Image 
                  src="/icons/system/long_right.svg"
                  alt="right icon"
                  width={24}
                  height={24}
                />
              </span>
            </a>
          </Link>
        </Wrapper>
        <div className={styles.mainImage}>
          <Image 
            src="/images/cheq_system.svg"
            alt="Mobile app - Scans QR at store, pays securely, pay later, wins gems"
            layout="fill"
            quality={100}
            priority
          />
        </div>
      </main> 

      <section className={styles.partnerSection}>
        <Partners />
      </section>

      <section className={styles.aboutSection}>
        <About />
      </section>
    </>
  )
}
