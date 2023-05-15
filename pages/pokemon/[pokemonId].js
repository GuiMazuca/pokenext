import Image from "next/image";


export const getStaticPaths = async () => {
  const maxPokemons = 248;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: index.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <>
    <div className="text-center">
      <div className=" flex justify-center items-center flex-col ">
      <h1 className=" text-4xl capitalize bg-[#333] text-white w-[300px] py-2 mt-20 rounded-[5px]">{pokemon.name}</h1>
      <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          width="200"
          height="200"
          alt={pokemon.name}
        />
    </div>
    <div>
      <h3>Número:</h3>
      <p>#{pokemon.id}</p>
    </div>
    <div>
      <h3>Tipo:</h3>
      <div>
        {pokemon.types.map((item, index)=> (
          <span key={index}>{item.type.name}</span>
        ))}
      </div>
      <div>
        <div>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div>
          <h4>peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
