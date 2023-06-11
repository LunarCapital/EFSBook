/* @refresh reload */
import { For, render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { Router, Routes, Route } from "@solidjs/router";
import { Nav } from "./Nav";
import { navLinks } from "./common/navlinks";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
    );
}

render(() => (
    <Router>
        <Nav />
        <Routes>
            <Route path="/" component={App}></Route>
            <For each={navLinks}>{(navLink) =>
                <Route path={navLink.path} component={navLink.component}></Route>
            }
            </For>
        </Routes>
    </Router>
), root!);