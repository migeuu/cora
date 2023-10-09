import type { Image as DecoImage } from "deco-sites/std/components/types.ts";
import Menu from "deco-sites/start/components/header/Menu.tsx";
import MenuButton from "$store/islands/MenuButton.tsx";
import { useUI } from "$store/sdk/useUI.ts";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
  title: string;
  href: string;
}

export interface Props {
  title?: string;
  logo: DecoImage;
  links?: Array<Link>;
}

function Header({
  title = "cora",
  logo = "/logo.svg",
  links = [
    {
      title: "Conta Digital",
      href: "https://www.cora.com.br/conta-pj-digital/",
    },
    { title: "Cartão", "href": "https://www.cora.com.br/cartao-empresarial/" },
    {
      title: "Gestão de Cobranças",
      "href": "https://www.cora.com.br/gestao-de-cobranca",
    },
    { title: "Carreiras", "href": "https://www.cora.com.br/vagas-cora" },
    { title: "Boletos", "href": "https://www.cora.com.br/boletos" },
    {
      title: "Sala de Imprensa",
      "href": "https://pj.cora.com.br/sala-de-imprensa/",
    },
    { title: "Parcerias", "href": "https://comunidade.cora.com.br/parcerias/" },
    { title: "Ajuda", "href": "http://meajuda.cora.com.br/" },
  ],
}: Props) {
  const { displayMenu } = useUI();

  return (
    <header class="h-[62px] px-6 flex items-center justify-between">
      <div>
        <img
          class="object-cover w-20"
          src={logo}
          alt={title}
        />
      </div>
      <MenuButton />
      <Menu links={links} />
    </header>
  );
}

export default Header;
