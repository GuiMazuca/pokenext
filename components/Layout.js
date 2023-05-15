import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout ({children}) {
  return (
    <>
    <Head>
     <Link rel="shortcut icon" href="/images/favicon.ico"/>
     <title>PokeNext</title>
    </Head>
    <Navbar />
    <main className=" min-h-[70vh]">{children}</main>
    <Footer />
    </>
  )
}