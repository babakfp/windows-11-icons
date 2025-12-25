import { getIcons } from "$lib/server/getIcons"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async ({ fetch }) => {
    const files = await getIcons(fetch)

    return new Response(JSON.stringify(files), {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "max-age=86400",
        },
    })
}
