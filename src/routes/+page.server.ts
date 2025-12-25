import type { Icons } from "$lib/server/getIcons"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ fetch }) => {
    const icons: Icons = await (await fetch("/files")).json()

    return {
        icons,
    }
}
