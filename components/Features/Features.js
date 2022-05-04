import Image from "next/image";
import { Wrapper } from "../../components";
import { featuresData } from "../../data.js";
import styles from "./Features.module.css";

function Features() {
  return (
    <Wrapper>
      <h2 className={styles.sectionTitle}>You'll love us even more</h2>
      {featuresData.map(feature => (
        <div 
          className={styles.featureContainer}
          key={feature.featureNumber}
        >
          {(feature.featureNumber > 1) ? 
            <p className={styles.featureLabel}>coming soon</p>
            :
            null
          }
          <p className={styles.featureDetails}>{feature.featureDetails}</p>
          <Image 
            src={feature.imageSrc}
            alt={feature.alt}
            width={280}
            height={220}
          />
        </div>
      ))}
    </Wrapper>
  ) 
}

export { Features };