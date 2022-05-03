import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { Wrapper, SocialLinks } from "../../components";
import cheqLogo from "../../public/images/cheq_logo.svg";


function Footer() {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.companyDetails}>
          <Image
            src={cheqLogo}
            alt="cheq logo"
            width={80}
            height={40}
          />
          <p className={styles.companyAddress}>Terrafin Solutions Private Limited #231, Eden Au Lac, Indiranagar - 560038</p>
          <p className={styles.companyContact}>CIN: U72200KA2021PTC149861</p>
          <p className={styles.companyContact}>Phone: +91 98455 63750</p>
          <p className={styles.companyContact}>Email: contactus@terrafin.tech</p>
        </div>

        <div>
          <SocialLinks />
          <Link href={"https://docs.google.com/document/d/e/2PACX-1vSbEbi3_Qeo32uen2Cbf26C15vwJ1egUAIqFCdUQD8H34Riu8Ac_XTnLigrAxIKwYaqO812e17y5TxM/pub"}>
            <a 
              className={styles.footerLink}
              target="_blank" 
            >Terms and conditions</a>
          </Link>
          <Link href={"https://docs.google.com/document/d/e/2PACX-1vQrcDCXfoOG9Hi5dPDVLj9HK1J5O9mw0mTDqIbKivIrsbkVF0V3GeofJpkJ_aovQd7hnhEHCQqNMV1S/pub"}>
            <a 
              className={styles.footerLink}
              target="_blank"
            >Privacy policy</a></Link>
          <p className={styles.copyright}>© Copyright 2022. All rights reserved.</p>
        </div>

        </Wrapper>
    </footer>
  )
}

export { Footer };