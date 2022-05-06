import Image from "next/image";
import { Wrapper } from "../../components";
import { howItWorksData } from "../../data.js";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <Wrapper>
      <h2 className={styles.sectionTitle}>How it works</h2>
      <div className={styles.stepContainer}>
        {howItWorksData.map(card => (
          <div 
            className={styles.stepCard}
            key={card.stepNumber}
          >
            <div className={styles.stepCardInfo}>
              <h3 className={styles.stepNumber}>{card.stepNumber}</h3>
              <p className={styles.stepDetails}>{card.stepDetails}</p>
            </div>
            <div className={styles.stepImage}>
              <Image 
                src={card.imageSrc}
                alt={card.alt}
                layout="fill"
              />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  ) 
}

export { HowItWorks };