import { getAllSvgFiles } from "$lib/server/getAllSvgFiles"

export const GET = async ({ fetch }) => {
    const files = await getAllSvgFiles(fetch)

    return new Response(JSON.stringify(files), {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "max-age=86400",
        },
    })
}
