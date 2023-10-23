import React from "react";
import Head from "next/head";
import { nanum } from "./fonts";
import Link from "next/link";
import Referens from "./components/Referens";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <main>
        <section className="hero-section">
          <h1 className={nanum.className}>Creative harmonic homes</h1>
          <div>
            <Link href="/contact" className={nanum.className}>
              Kontakta mig
            </Link>
          </div>
        </section>
        <div className="your-dreams">
          <h2>Vad drömmer du om?</h2>
          <p>
            Kanske behöver du bara få lite stöd i dina egna inredningstankar
            eller så vill du ha hjälp att designa ett helt hem. Våra utbildade
            inredningsexperter hjälper dig att kombinera färger och material på
            väggar, golv, textilier och övrig inredning för ett lyckat
            slutresultat. Börja med att prata med någon av våra
            inredningsexperter och boka tid för ett rådgivningsmöte. Vissa
            butiker erbjuder också hembesök.
          </p>
        </div>
        <Referens/>
        
      </main>
    </>
  );
}
