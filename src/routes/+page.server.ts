import type { SvgFiles } from "$lib/server/getAllSvgFiles"
import { transformFiles } from "$lib/server/transformFiles.js"

export const load = async ({ fetch }) => {
    const files: SvgFiles = await (await fetch("/files")).json()
    const icons = transformFiles(files)

    return {
        icons,
    }
}
