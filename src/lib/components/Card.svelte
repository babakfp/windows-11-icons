<script lang="ts">
    import type { Icons } from "$lib/server/transformFiles"

    let { icon }: { icon: Icons[number] } = $props()
</script>

<li class="flex flex-col rounded border-2 border-gray-800 text-center">
    <img class="mx-auto size-32" src={icon.download_url} alt={icon.title} />
    <p class="px-6 pb-4">{icon.title}</p>
    <div class="mt-auto border-t border-gray-800 px-6 pb-6 pt-6">
        <div class="flex justify-between text-xs">
            <span>Download:</span>
            <ul class="flex justify-center gap-4">
                <li>
                    <a class="underline" href={icon.download_url}>
                        <code>SVG</code>
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
                        <code>ICO</code>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</li>
