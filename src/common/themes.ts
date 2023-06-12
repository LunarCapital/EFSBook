import "solid-styled-components";
import { DefaultTheme } from "solid-styled-components";

declare module "solid-styled-components" {
    export interface DefaultTheme {
        colours: {
            background: string;
            border: string;
            panel: string;
            text: {
                primary: string;
            };
        };
    }
}

export const darkTheme: DefaultTheme = {
    colours: {
        background: "#282c34",
        border: "#778196",
        panel: "#162646",
        text: {
            primary: "white",
        }
    }
}