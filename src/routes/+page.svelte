<script lang="ts">
    let { data } = $props()

    const icons = data.files
        .map((file) => {
            const title = file.name
                .replace(".svg", "")
                .replace("-", " ")
                .split("_")
                .map((word) => {
                    if (word === "to") {
                        return word
                    }
                    if (["3d", "4k", "mp3"].includes(word)) {
                        return word.toUpperCase()
                    }
                    return word.charAt(0).toUpperCase() + word.slice(1)
                })
                .join(" ")

            return {
                title,
                ...file,
            }
        })
        .sort((a, b) => a.name.localeCompare(b.name))
</script>

<div class="container">
    {#if icons.length}
        <ul class="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-8">
            {#each icons as icon}
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
