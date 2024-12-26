<script lang="ts">
    import type { Icons } from "$lib/server/transformFiles"

    let { icon }: { icon: Icons[number] } = $props()
</script>

<li class="grid justify-center justify-items-center text-center">
    <img class="size-32" src={icon.download_url} alt={icon.title} />
    <p>{icon.title}</p>
    <ul class="mt-2 flex justify-center gap-4 text-sm">
        <li>
            <a class="underline" href={icon.download_url}>
                <code>.svg</code>
            </a>
        </li>
        <li>
            <a
                class="underline"
                href="https://raw.githubusercontent.com/icon11-community/Folder11-Ico/refs/heads/main/ico/{icon.name.replace(
                    '.svg',
                    '.ico',
                )}"
            >
                <code>.ico</code>
            </a>
        </li>
    </ul>
</li>
