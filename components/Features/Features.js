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
          <div className={styles.featureInfo}>
            {(feature.featureNumber > 1) ? 
              <p className={styles.featureLabel}>coming soon</p>
              :
              null
            }
            <p className={styles.featureDetails}>{feature.featureDetails}</p>
          </div>
          <div className={styles.featureImage}>
            <Image 
              src={feature.imageSrc}
              alt={feature.alt}
              width={280}
              height={220}
              layout="responsive"
            />
          </div>
        </div>
      ))}
    </Wrapper>
  ) 
}

export { Features };