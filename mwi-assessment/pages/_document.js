import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="https://midwesterninteractive.com/favicon-32x32.png"
          />
        </Head>
        <body className="font-poppins bg-darkGray text-lightGray tracking-wide flex flex-col ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
