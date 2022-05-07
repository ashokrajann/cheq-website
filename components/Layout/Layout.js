import { Navbar } from "../../components";
import { Footer } from "../../components";

function Layout({ children }) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export { Layout };