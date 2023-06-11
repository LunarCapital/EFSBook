import { For } from "solid-js";
import { NavBack, NavItem, NavLink, NavList } from "./Nav.styled";
import { navLinks } from "./common/navlinks";

export const Nav = () => {
  return (
    <NavBack>
      <NavList>
        <For each={navLinks}>{(navLink) =>
            <NavItem>
                <NavLink href={navLink.path}>{navLink.name}</NavLink>
            </NavItem>
        }
        </For>
      </NavList>
    </NavBack>
  );
};
