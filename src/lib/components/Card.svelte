<script lang="ts">
    import type { Icons } from "$lib/server/getIcons"

    let {
        icon,
    }: {
        icon: Icons[number]
    } = $props()
</script>

<li class="flex flex-col rounded border-2 border-gray-800 text-center">
    <img
        class="mx-auto size-32"
        src="https://raw.githubusercontent.com/icon11-community/Folder-Ico/main/ico/{icon.name}.ico"
        alt={icon.title}
        loading="lazy"
    />
    <p class="px-6 pb-4">{icon.title}</p>
    <div class="mt-auto border-t border-gray-800 px-6 pb-6 pt-6">
        <div class="flex justify-between text-xs">
            <span>Download</span>
            <ul class="flex justify-center gap-2">
                <li>
                    <a
                        class="underline"
                        href="/download?slug={icon.name}&format=svg"
                    >
                        <code>SVG</code>
                    </a>
                </li>
                <span>/</span>
                <li>
                    <a
                        class="underline"
                        href="/download?slug={icon.name}&format=ico"
                    >
                        <code>ICO</code>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</li>
