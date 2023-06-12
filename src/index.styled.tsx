import { styled } from "solid-styled-components";

export const Background = styled("div")`
    background-color: ${props => props.theme?.colours.background};
    min-height: 100vh;
`;