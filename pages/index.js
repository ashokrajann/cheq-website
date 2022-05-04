import Head from "next/head";
import Image from "next/image";
import { JoinUs, JoinCheq,  About, HowItWorks, Partners, Wrapper, Features, ButtonPrimary } from "../components";
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
          <ButtonPrimary label={"Join now"}/>
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

      <section className={styles.howItWorksSection}>
        <HowItWorks />
      </section>

      <section className={styles.joinCheq}>
        <JoinCheq />
      </section>

      <section className={styles.featureSection}>
        <Features />
      </section>

      <section className={styles.joinUsSection}>
        <JoinUs />
      </section>

      <section className={styles.aboutSection}>
        <About />
      </section>
    </>
  )
}
