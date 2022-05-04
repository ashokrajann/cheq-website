import Link from "next/link";
import Image from "next/image";
import instagramLogo from "../../public/icons/social/instagram.svg";
import twitterLogo from "../../public/icons/social/twitter.svg";
import facebookLogo from "../../public/icons/social/facebook.svg";
import linkedInLogo from "../../public/icons/social/linkedIn.svg";
import styles from "./SocialLinks.module.css";

const linksData = [
  {
    name: "instagram",
    image: instagramLogo,
    url: "https://www.instagram.com/?hl=en"
  },
  {
    name: "twitter",
    image: twitterLogo,
    url: "https://www.instagram.com/?hl=en"
  },
  {
    name: "facebook",
    image: facebookLogo,
    url: "https://www.instagram.com/?hl=en"
  },
  {
    name: "linkedIn",
    image: linkedInLogo,
    url: "https://www.instagram.com/?hl=en"
  }
]

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      {linksData.map(socialLink => (
        <Link 
          key={socialLink.name}
          href={socialLink.url}
        >
        <a 
          target="_blank" 
          className={styles.socialLinkImage}>
          <Image 
            src={socialLink.image}
            alt={socialLink.name}
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