import { Wrapper, ButtonPrimary } from "../../components";
import Image from "next/image";
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={styles.container}>
        <div className={styles.mainInfo}>
          <h1 className={styles.mainTitle}>Pay later,<br /> anywhere</h1>
          <p className={styles.mainDescription}>Buy now, pay later at 15 Million+ <br /> merchants across India using UPI</p>
          <ButtonPrimary label={"Join now"}/>
        </div>
      <div className={styles.mainImage}>
        <Image 
          src="/images/cheq_system.svg"
          alt="Mobile app - Scans QR at store, pays securely, pay later, wins gems"
          layout="fill"
          objectFit="cover"
          quality={50}
          priority
        />
      </div>
    </div>
  )
}

export { Introduction };