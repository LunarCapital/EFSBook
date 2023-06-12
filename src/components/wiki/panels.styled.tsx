import { styled } from "solid-styled-components";

export const WikiGrid = styled("div")`
    align-items: flex-start;
    display: grid;
    grid-gap: 20px;
    padding: 20px;

    @media (min-width: 480px) {
        grid-template-columns: 1fr 5fr;  
    }
`;

export const BasePanel = styled("div")`
    background-color: ${props => props.theme?.colours.panel};
    border: 3px solid;
    border-color: ${props => props.theme?.colours.border};
    border-radius: 25px;
    min-height: 80vh;
    padding: 20px;
`

export const SectionPanel = styled(BasePanel)`
    position: sticky;
    top: 20px;
`;

export const ArticlePanel = styled(BasePanel)`
    color: ${props => props.theme?.colours.text.primary};
    min-height: 3000vh;
`;