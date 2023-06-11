import { Component } from "solid-js";
import App from "../App";
import { About } from "../pages/About";

type NavLink = {
    name: string;
    path: string;
    component: Component;
}

export const navLinks: NavLink[] = [
    {
        name: "Home",
        path: "/",
        component: App
    },
    {
        name: "About",
        path: "/about",
        component: About
    }
];