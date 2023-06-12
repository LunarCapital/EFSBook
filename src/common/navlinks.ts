import { Component } from "solid-js";
import App from "../App";
import { About } from "../pages/About";
import { Wiki } from "../pages/Wiki";

type NavLink = {
    name: string;
    path: string;
    dynamicPath?: string;
    component: Component;
}

export const navLinks: NavLink[] = [
    {
        name: "Home",
        path: "/",
        component: App
    },
    {
        name: "Wiki",
        path: "/wiki",
        dynamicPath: "/*path",
        component: Wiki
    },
    {
        name: "About",
        path: "/about",
        component: About
    }
];