<script lang="ts">
    let { data } = $props()
</script>

<div class="container">
    {#if data.icons.length}
        <ul class="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-8">
            {#each data.icons as icon}
                <li class="grid justify-center text-center">
                    <img
                        class="size-32"
                        src={icon.download_url}
                        alt={icon.title}
                    />
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
            {/each}
        </ul>
    {/if}
</div>
