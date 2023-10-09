import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  subtitle?: string;
  text: string;
  buttonText: string;
  img: DecoImage;
  imgAlt: string;
}

function Hero({
  title = "Conta Digital PJ gratuita",
  subtitle = "feita por quem entende você e sua empresa.",
  text =
    "Ágil, humana e sem tarifas abusivas. Abra sua conta Cora direto pelo app, livre de burocracia: simples, rápido e fácil de usar",
  buttonText = "Abra sua conta PJ grátis",
  img,
  imgAlt = "Cartao da Cora",
}: Props) {
  return (
    <section class="flex justify-center items-center text-white bg-primary min-h-[calc(100vh-84px)]">
      <div class="container flex wrap justify-center items-center gap-14 px-16">
        <div class="w-1/2">
          <h1 class="font-bold text-6xl">
            {title} <span class="font-normal text-black">{subtitle}</span>
          </h1>
          <p class="text-2xl my-7">{text}</p>
          <button class="bg-black rounded-[30px] px-8 py-3 text-base font-extrabold">
            {buttonText}
          </button>
        </div>
        <div class="w-1/2">
          <img src={img} alt={imgAlt} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
