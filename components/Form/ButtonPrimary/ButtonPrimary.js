import Link from "next/link";
import Image from "next/image";
import styles from "./ButtonPrimary.module.css";

function ButtonPrimary({ label }) {
  return (
    // <Link href="https://play.google.com/store/apps/details?id=com.acecredit.android">
      <a 
        className={styles.container}
        href="https://play.google.com/store/apps/details?id=com.acecredit.android"
        target="_blank"
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.image}>
          <Image 
            src="/icons/system/long_right.svg"
            alt="right icon"
            width={24}
            height={24}
          />
        </span>
      </a>
    // </Link>
  )
}

export { ButtonPrimary };