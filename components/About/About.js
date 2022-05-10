import Image from "next/image";
import { Wrapper } from "../../components";
import styles from "./About.module.css";

function About() {
  return (
    <Wrapper>
      <h2 className={styles.aboutTitle}>About us</h2>
      <p className={styles.aboutDescription}>Our mission is to simplify banking and payments. We aim to provide affordable credit to everyone in an efficient and convenient manner. <br />Some of the top venture firms share our mission.</p>
      <div className={styles.investorLogos}>
        <a 
          href="https://www.bettercapital.vc/" 
          target="_blank"
          className={styles.investorLogo}
        >
          <Image
            src="/images/better_logo.svg"
            alt={"Better captial logo"}
            width={120}
            height={56}
          />
        </a>
        <a 
          href="https://www.bettercapital.vc/" 
          target="_blank"
          className={styles.investorLogo}
        >
          <Image
            src="/images/prophetic_logo.svg"
            alt={"Prophetic ventures logo"}
            width={56}
            height={56}
          />
        </a>
      </div>
    </Wrapper>
  )
}

export { About };