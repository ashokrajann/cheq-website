import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="icons/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon/favicon-16x16.png" />
        <link rel="manifest" href="icons/favicon/site.webmanifest" />

        {/* Font - Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />

        {/* Description */}
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