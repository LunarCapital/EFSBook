import { Params, useParams } from "@solidjs/router";
import { Component } from "solid-js";
import { ArticlePanel, SectionPanel, WikiGrid } from "../components/wiki/panels.styled";
import SolidMarkdown from "solid-markdown";

export const Wiki: Component = () => {
    const params: Params = useParams<{ path: string }>();
    console.log(params.path);

    let article: string = "";

    if (params.path === "test/page") {
        article = testArticle;
    }

    return (
        <WikiGrid>
            <SectionPanel></SectionPanel>
            <ArticlePanel>
                <SolidMarkdown children={article}/>
            </ArticlePanel>
        </WikiGrid>
    );
}

const testArticle: string = `
# Test Title

## some intro here
intro here

### life

### serving cunt

### death
`;