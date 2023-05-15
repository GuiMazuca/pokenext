import Link from "next/link"
import Image from "next/image"

export default function Navbar () {
  return (
    <>
    <nav className=" w-full flex justify-between items-center px-8 py-4 mb-4 bg-[#333] text-white shadow-2xl">
      <Link href="/">
      <div className=" flex items-center justify-center">
        <Image src= "/images/pokeball.png" width="30" height="30" alt="pokenext"/>
        <h1 className=" ml-2">PokeNext</h1>
      </div>
      </Link>
      <ul  className=" flex items-center justify-center gap-4">
        <li>
          <Link href="/"><span className=" border-transparent border-2 hover:border-b-2 hover:border-b-white duration-300 p-2">Home</span></Link>
        </li>
        <li>
          <Link href="/about"><span className=" border-transparent border-2 hover:border-b-2 hover:border-b-white duration-300 p-2">Sobre</span></Link>
        </li>
      </ul>
    </nav>
    </>
  )
}