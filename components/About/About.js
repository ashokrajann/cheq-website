import { Wrapper } from "../../components";
import styles from "./About.module.css";

function About() {
  return (
    <Wrapper>
      <h2 className={styles.aboutTitle}>About us</h2>
      <p className={styles.aboutDescription}>We are the next-gen fintech solution to empower Indians with a new-age instant credit experience with unmatched technology. Cheq works on UPI technology and you can repay us within 30 days of your bill cycle. Say NO to overcrowded bank statements with UPI transactions.¯</p>
    </Wrapper>
  )
}

export { About };