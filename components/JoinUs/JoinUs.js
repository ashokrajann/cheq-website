import Image from "next/image";
import { Wrapper } from "../../components";
import styles from "./JoinUs.module.css";
import { ButtonPrimary } from "../Form/ButtonPrimary/ButtonPrimary";

function JoinUs() {
  return (
    <Wrapper>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Join us for free</h2>
        <p className={styles.sectionDescription}>Get your credit line instantly using your credit score</p>
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
      </div>
    </Wrapper>
  )
}

export { JoinUs };