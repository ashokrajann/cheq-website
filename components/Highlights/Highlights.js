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
                <span 
                  key={tag} 
                  className={styles.hashtag}
                >#{tag}</span>
              ))}
            </div>
            <q className={styles.highlightDescription}>{card.highlightDetails}</q>
            <p className={styles.userDetails}>{`- ${card.userName}, ${card.userAge}`}</p>
          </div>
          
          <div className={styles.highlightImage}>
            <Image 
              src={card.imageBg}
              alt={card.alt}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
            {/* <Image 
              src={card.imageSrc}
              alt={card.alt}
              width={340}
              height={420}
              layout="responsive"
            /> */}
          </div>
          
        </div>
      ))}
    </Wrapper>
  )
}

export { Highlights };