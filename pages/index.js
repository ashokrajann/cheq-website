import Head from "next/head";
import { Highlights, JoinUs, JoinCheq,  About, HowItWorks, Partners, Features, Introduction } from "../components";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheq - Pay later, anywhere</title>
      </Head>
      <main className={styles.mainSection}>
        <Introduction />
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

      <section className={styles.HighlightsSection}>
        <Highlights />
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
