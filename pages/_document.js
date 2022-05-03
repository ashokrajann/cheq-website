import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="icons/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon/favicon-16x16.png" />
        <link rel="manifest" href="icons/favicon/site.webmanifest" />
        <meta name="description" content="A buy now, pay later app that works with UPI. Simply scan any UPI QR code or enter your UPI ID to make payments via credit." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;