import { Octokit } from "@octokit/rest"
import { env } from "$env/dynamic/private"

type SvelteKitLoadFetch = typeof fetch

export const getIcons = async (fetch: SvelteKitLoadFetch) => {
    const octokit = new Octokit({ auth: env.GITHUB_TOKEN, request: { fetch } })

    const OWNER = "icon11-community"
    const REPO = "Folder11"

    const defaultBranch = (
        await octokit.repos.get({
            owner: OWNER,
            repo: REPO,
        })
    ).data.default_branch

    const icons = (
        await octokit.git.getTree({
            owner: OWNER,
            repo: REPO,
            path: "svg",
            tree_sha: defaultBranch,
            recursive: "true",
        })
    ).data.tree
        .filter(
            (file) =>
                file.path?.startsWith("svg/") && file.path?.endsWith(".svg"),
        )
        .map((file) => {
            const name = file.path!.replace(`svg/`, ``).replace(".svg", "")

            const title = name
                .replace("-", " ")
                .split("_")
                .map((word) => {
                    if (word === "to") {
                        return word
                    }
                    if (["3d", "4k", "mp3"].includes(word)) {
                        return word.toUpperCase()
                    }
                    return word.charAt(0).toUpperCase() + word.slice(1)
                })
                .join(" ")

            return {
                name,
                title,
            }
        })
        .sort((a, b) => a.name.localeCompare(b.name))

    return icons
}

export type Icons = Awaited<ReturnType<typeof getIcons>>
