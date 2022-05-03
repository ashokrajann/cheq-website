import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>Cheq - Pay later, anywhere</title>
        <meta name="description" content="A buy now, pay later app that works with UPI. Simply scan any UPI QR code or enter your UPI ID to make payments via credit." />
      </Head>
      <main>
        <h1>Cheq - coming soon</h1>
        <Link href="/apply"><a>Apply now</a></Link>
      </main>        
    </>
  )
}
