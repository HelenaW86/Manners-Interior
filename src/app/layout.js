import Head from "next/head";
import "./globals.css";

import { albert } from "./fonts";

export const metadata = {
  title: "Manners Interior",
  description:
    "Inredning för ditt hem inför visning, försäljning, fotografering eller bara för att få det helt ljuvligt hemma!",
};

export default function RootLayout({ children }) {
  return (<>
    <Head>
    <link rel="shortcut icon" href="./favicon.ico" />
    </Head>
    <html lang="en" className={albert.className} >
      <body>{children}</body>
    </html>
    </>
  );
}
