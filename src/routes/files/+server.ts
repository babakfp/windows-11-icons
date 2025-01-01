import { getIcons } from "$lib/server/getIcons"

export const GET = async ({ fetch }) => {
    const files = await getIcons(fetch)

    return new Response(JSON.stringify(files), {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "max-age=86400",
        },
    })
}
