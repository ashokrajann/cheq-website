import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import cheqLogo from "../../public/images/cheq_logo.svg";
import { Wrapper } from "../../components";

function Navbar() {
  return (
    <header className={styles.navContainer}>
      <Wrapper>
        <nav className={styles.mainNav}>
          <Link href="/">
            <a className={styles.brandLogo}>
              <Image
                src={cheqLogo}
                alt="Cheq logo"
                width={64}
                height={32}
                priority
              />
            </a>
          </Link>
          <Link href="/apply">
            <a className={styles.applyBtn}>Join now</a>
          </Link>
        </nav>
      </Wrapper>
    </header>
  )
}

export { Navbar };