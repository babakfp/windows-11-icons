import type { Icons } from "$lib/server/getIcons"

export const load = async ({ fetch }) => {
    const icons: Icons = await (await fetch("/files")).json()

    return {
        icons,
    }
}
