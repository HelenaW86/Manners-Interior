import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <main style={{padding: "60px 0"}}>
        <Image
          src="/manners_logga.png"
          alt="Manners Logo"
          width={300}
          height={300}
          priority
        />
        <h1 style={{ letterSpacing: 10, textTransform: "uppercase", fontSize: "1.2rem", margin: "20px auto" }}>..Coming Soon..</h1>
      </main>
    </>
  );
}
