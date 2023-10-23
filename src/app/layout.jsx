import Head from "next/head";
import "./scss/style.scss";
import { mohave } from "./fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Manners Interior",
  description:
    "Inredning för ditt hem inför visning, försäljning, fotografering eller bara för att få det helt ljuvligt hemma!",
};

export default function RootLayout({ children }) {
  return (<>
    <Head>
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta property="og:image" content="./manners_logga.png"></meta>
    </Head>
    <html lang="sv" className={mohave.className} >
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
    </>
  );
}
