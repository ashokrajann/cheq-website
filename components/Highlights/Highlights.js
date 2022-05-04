import Image from "next/image";
import { Wrapper } from "../../components";
import { highlightsData } from "../../data.js";
import styles from "./Highlights.module.css";

function Highlights() {
  return (
    <Wrapper>
      <h2 className={styles.sectionTitle}>Why cheq it?</h2>
      {highlightsData.map(card => (
        <div 
          key={card.highlightNumber}
          className={styles.highlightCard}
          style={{ backgroundColor: card.theme }}
        >

          <div className={styles.highlightDetails}>
            <div className={styles.hashtags}>
              {card.tags.map(tag => (
                <span kay={card} className={styles.hashtag}>#{tag}</span>
              ))}
            </div>
            <quote className={styles.highlightDescription}>"{card.highlightDetails}"</quote>
            <p className={styles.userDetails}>{`- ${card.userName}, ${card.userAge}`}</p>
          </div>
          
          <div className={styles.highlightImage}>
            <Image 
              src={card.imageSrc}
              alt={card.alt}
              width={312}
              height={240}
            />
          </div>
          
        </div>
      ))}
    </Wrapper>
  )
}

export { Highlights };