import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Document is a custom document component for Next.js.
 * It is used to augment the application's <html> and <body> tags.
 *
 * @returns {React.ReactElement} The React element that represents the document structure.
 */

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
