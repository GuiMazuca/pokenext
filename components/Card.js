import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {
  return (
    <>
      <div className=" flex flex-col items-center justify-center p-[2rem_1rem] mb-8 w-[23%] border-[2px] border-[#E33d33] rounded-[1rem] shadow-[5px_5px_12px_rgba(0,0,0,0.5)] bg-[#333] text-white">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="120"
          height="120"
          alt={pokemon.name}
        />
        <p className=" my-4 bg-[#e33d33] rounded-[5px] p-[5px] text-white flex items-center justify-center">#{pokemon.id}</p>
        <h3 className=" capitalize font-bold mb-4 text-2xl">{pokemon.name}</h3>
        <Link href={`/pokemon/${pokemon.id}`}>
          <span className=" bg-white p-[.7rem_2rem] rounded-[5px] text-[#222] duration-[0.4s] font-bold hover:bg-[#e33d33] hover:text-white">Detalhes</span>
        </Link>
      </div>
    </>
  );
}
