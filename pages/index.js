import Head from "next/head";
import Link from 'next/link';

export default function Home() {
  const pageHeadData = (
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="keywords" content="Keyword 1, keyword 2"/>
      <meta name="author" content="Author name" />
      <meta name="copyright" content="Copyright owner" />
      <meta name="robots" content="follow"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  return (
    <div>
      {pageHeadData}
      <h1>HI NEXT JS Head tag usage</h1>
      <main>
        <div>
          <p>See _app.js and _document.js</p>
        </div>
      </main>

      <Link href="/a">
        <button>To "a" page</button>
      </Link>
    </div>
  );
}
