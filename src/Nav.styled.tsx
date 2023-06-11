import { styled } from "solid-styled-components";
import { A } from "@solidjs/router";

export const NavBack = styled("div")`
  background-color: grey;
`;

export const NavList = styled("ul")`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const NavItem = styled("li")`
  display: inline;
  float: left;
`;

export const NavLink = styled(A)`
  display: block;
  color: blue;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;
