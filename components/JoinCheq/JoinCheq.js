import Image from "next/image";
import { Wrapper } from "../../components";
import styles from "./JoinCheq.module.css";
import { ButtonPrimary } from "../../components";

function JoinCheq() {
  return (
    <Wrapper>
      <h2 className={styles.sectionTitle}>Join us early</h2>
      <div className={styles.chargesContainer}>
        <div className={styles.chargesCard}>
          <h3 className={styles.chargesAmount}>₹0</h3>
          <p className={styles.chargesType}>Joining fee</p>
        </div>
        <div className={styles.chargesCard}>
          <h3 className={styles.chargesAmount}><span className={styles.chargeStrike}>₹499</span> ₹0</h3>
          <p className={styles.chargesType}>Annual charges</p>
        </div>
      </div>

      <ButtonPrimary label={"Get started"} />
      <div className={styles.offerContainer}>
        <Image 
          src="/icons/system/offer.svg"
          alt="offer icon"
          width={40}
          height={40}
        />
        <div className={styles.offerDetails}>
          <p className={styles.offerCaption}>Limited time offer</p>
          <p className={styles.offerDescription}>Get ₹150 off on your first payment</p>
        </div>
      </div>
    </Wrapper>
  )
}

export { JoinCheq };