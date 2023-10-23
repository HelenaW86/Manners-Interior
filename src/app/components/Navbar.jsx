'use client'
import Link from "next/link";
import imageUrl from "../assets/manners_logga.png";
import Image from "next/image";
import { Hamburger } from "./Hamburger";
import { useState } from "react";
import { nanum } from "../fonts";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className={`laptop-nav ${nanum.className}`}>
        <Link href="/">
          <Image
            src={imageUrl}
            alt="Manners Logo"
            width={40}
            height={40}
            priority
          />
        </Link>
        <div style={{ margin: "auto 5px" }}>
          <Link href="/about">Om mig</Link>
          <Link href="/service">Mina tjänster</Link>
          <Link href="/galleri">Galleriet</Link>
          <Link href="/contact">Ta kontakt</Link>
        </div>
      </nav>
      <nav className="mobile-nav">
        <Hamburger setToggle={setToggle} toggle={toggle}/>
        
      </nav>
      <div className={`dropdown-menu ${toggle ? "open" : ""}`}>
        <Link href="/" onClick={() => setToggle(false)}>Hem</Link>
        <Link href="/about" onClick={() => setToggle(false)}>Om mig</Link>
        <Link href="/service" onClick={() => setToggle(false)}>Mina tjänster</Link>
        <Link href="/galleri" onClick={() => setToggle(false)}>Galleriet</Link>
        <Link href="/contact" onClick={() => setToggle(false)}>Ta kontakt</Link>
      
      </div>
    </>
  );
}
