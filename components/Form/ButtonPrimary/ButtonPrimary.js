import Link from "next/link";
import Image from "next/image";
import styles from "./ButtonPrimary.module.css";

function ButtonPrimary({ label }) {
  return (
    <Link href="https://api.whatsapp.com/send/?phone=919845563750&text=Hi+I+want+to+signup&app_absent=0">
      <a className={styles.container}>
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
    </Link>
  )
}

export { ButtonPrimary };