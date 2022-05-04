import Image from "next/image";
import { Wrapper } from "../../components";
import { howItWorksData } from "../../data.js";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <Wrapper>
      <h2 className={styles.sectionTitle}>How it works</h2>
      {howItWorksData.map(card => (
        <div 
          className={styles.stepContainer}
          key={card.stepNumber}
        >
          <h3 className={styles.stepNumber}>{card.stepNumber}</h3>
          <p className={styles.stepDetails}>{card.stepDetails}</p>
          <Image 
            src={card.imageSrc}
            alt={card.alt}
            width={312}
            height={220}
          />
        </div>
      ))}
    </Wrapper>
  ) 
}

export { HowItWorks };