import { Octokit } from "@octokit/rest"
import { GITHUB_TOKEN } from "$env/static/private"

type SvelteKitLoadFetch = typeof fetch

export const getAllSvgFiles = async (fetch: SvelteKitLoadFetch) => {
    const octokit = new Octokit({ auth: GITHUB_TOKEN, request: { fetch } })

    const res = await octokit.repos.getContent({
        owner: "icon11-community",
        repo: "Folder11",
        path: "svg",
    })

    const files = (Array.isArray(res.data) ? res.data : []).filter(
        (entry) => entry.type === "file" && entry.name.endsWith(".svg"),
    )

    return files
}

export type SvgFiles = Awaited<ReturnType<typeof getAllSvgFiles>>