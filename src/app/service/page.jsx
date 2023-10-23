import Link from "next/link";

export default function Service(){
  return(
    <main>
      <h1>
       Mina tjänster
      </h1>
      <Link href="/service/homestyling">HomeStyling</Link>
      <Link href="/service/board">MoonBoard</Link>
    </main>
  )
  }