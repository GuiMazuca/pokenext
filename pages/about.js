import Image from "next/image";

export default function About() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center text-center">
        <h1 className=" mb-4 text-2xl font-bold">Sobre o projeto</h1>
        <p className=" mb-4 max-w-md leading-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quia
          asperiores dolorem facilis exercitationem, fuga minima ratione minus
          incidunt sint. Dicta eos excepturi id dolor ex esse quos. Quibusdam,
          hic.
        </p>
        <Image
          src="/images/charizard.png"
          width="300"
          height="300"
          alt="chraiard"
        />
      </div>
    </>
  );
}
