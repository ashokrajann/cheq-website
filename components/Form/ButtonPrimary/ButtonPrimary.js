import Link from "next/link";
import Image from "next/image";
import styles from "./ButtonPrimary.module.css";

function ButtonPrimary({ label }) {
  return (
    <Link href="/apply">
      <a className={styles.mainButton}>
        {label}
        <span className={styles.mainButtonImage}>
          <Image 
            src="/icons/system/long_right.svg"
            alt="right icon"
            width={24}
            height={24}
          />
        </span>
      </a>
    </Link>
  )
}

export { ButtonPrimary };