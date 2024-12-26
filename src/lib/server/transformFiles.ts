import type { SvgFiles } from "./getAllSvgFiles"

export const transformFiles = (files: SvgFiles) => {
    return files
        .map((file) => {
            const title = file.name
                .replace(".svg", "")
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
                title,
                ...file,
            }
        })
        .sort((a, b) => a.name.localeCompare(b.name))
}

export type Icons = Awaited<ReturnType<typeof transformFiles>>
