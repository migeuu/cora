import { useUI } from "$store/sdk/useUI.ts";
import type { Link } from "deco-sites/start/components/header/Header.tsx";

export interface Props {
  links?: Array<Link>
}

function Menu({ links }: Props) {
  const { displayMenu } = useUI();

  return (
    <>
      <span>{displayMenu.value.toString()}</span>
      {!!links?.length && displayMenu.value && (
        <ul class="flex">
          {links.map(({ href, title }) => (
            <li>
              <a target="_blank" href={href} aria-label={title} class="link">{title}</a>
            </li>
          ))}
        </ul>
      )
      }
    </>
  )
}

export default Menu