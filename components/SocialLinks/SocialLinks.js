import Link from "next/link";
import Image from "next/image";
import { socialLinksData } from "../../data";
import styles from "./SocialLinks.module.css";

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      {socialLinksData.map(socialLink => (
        <Link 
          key={socialLink.name}
          href={socialLink.url}
        >
        <a 
          target="_blank" 
          className={styles.socialLinkImage}>
          <Image 
            src={socialLink.imageSrc}
            alt={socialLink.alt}
            width={32}
            height={32}
          />
        </a>
      </Link>
      ))}
    </div>
  )
}

export { SocialLinks };