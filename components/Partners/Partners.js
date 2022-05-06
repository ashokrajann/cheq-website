import Image from "next/image";
import { Wrapper } from "../../components";
import styles from "./Partners.module.css";

function Partners() {
  return (
    <Wrapper>
      <div className={styles.container}>
        <h2 className={styles.partnerTitle}>Powered by</h2>
        <span className={styles.partnerImage}>
          <Image
            src="/images/upi_logo.svg"
            alt="Logo of UPI"
            width={72}
            height={24}
            priority
          />
        </span>
        <span className={styles.partnerImage}>
          <Image
            src="/images/transcorp_logo.svg"
            alt="Logo of Transcorp bank"
            width={136}
            height={24}
            priority
          />
        </span>
      </div>
    </Wrapper>
  )
}

export { Partners };