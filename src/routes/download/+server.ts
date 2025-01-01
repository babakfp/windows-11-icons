import { error } from "@sveltejs/kit"

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const slug = url.searchParams.get("slug")
    const format = url.searchParams.get("format")

    // Determine which file type is requested
    if (!format || !["svg", "ico"].includes(format)) {
        throw error(400, "Unsupported format")
    }

    if (!slug) {
        throw error(400, "Missing slug parameter")
    }

    let targetUrl: string

    if (format === "svg") {
        targetUrl = `https://raw.githubusercontent.com/icon11-community/Folder11/refs/heads/main/svg/${slug}.svg`
    } else {
        targetUrl = `https://raw.githubusercontent.com/icon11-community/Folder11-Ico/refs/heads/main/ico/${slug}.ico`
    }

    try {
        const response = await fetch(targetUrl)
        if (!response.ok) {
            throw error(500, `Failed to fetch ${format} file`)
        }

        // Return the proxied file
        return new Response(response.body, {
            headers: {
                "Content-Type":
                    response.headers.get("Content-Type") ||
                    "application/octet-stream",
                "Content-Disposition": `attachment; filename="${slug}.${format}"`,
            },
        })
    } catch (err) {
        console.error(err)
        throw error(500, "Internal server error")
    }
}
