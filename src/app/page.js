import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <main>
        <Image
          src="/manners_logga.png"
          alt="Manners Logo"
          width={600}
          height={600}
          priority
        />
        <h1 style={{ letterSpacing: 10, textTransform: "uppercase", fontSize: "3rem" }}>Coming Soon...</h1>
      </main>
    </>
  );
}
