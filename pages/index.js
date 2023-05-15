import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 248;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ pokemons }) {
  return (
    <>
      <div className=" flex items-center justify-center mb-8">
        <h1 className=" text-3xl font-bold text-[#333] mr-2">
          Poke<span className=" text-red-700">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="pokeBoll"
        />
      </div>
      <div className=" flex flex-wrap justify-between items-center max-w-[1100px] m-[0px_auto]">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
