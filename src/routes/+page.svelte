<script lang="ts">
    import { untrack } from "svelte"
    import Card from "$lib/components/Card.svelte"

    let { data } = $props()

    let search = $state("")
    let page = $state(1)
    const perPage = 10

    const searchedIcons = $derived.by(() => {
        if (!search) return data.icons
        return data.icons.filter((icon) =>
            icon.title.toLowerCase().includes(search.toLowerCase()),
        )
    })
    $effect(() => {
        searchedIcons
        untrack(() => (page = 1))
    })
    const pageIcons: typeof data.icons = $derived(
        searchedIcons.slice(0, page * perPage),
    )
    const isIconsLeftToShow = $derived(searchedIcons.length > pageIcons.length)
</script>

<div class="container pb-24 pt-12">
    <input
        class="h-12 w-full rounded border-2 border-gray-800 bg-gray-900 px-4 reset-search-input"
        type="search"
        placeholder="Search icons..."
        bind:value={search}
    />

    {#if pageIcons.length}
        <ul
            class="mt-12 grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-8"
        >
            {#each pageIcons as icon (icon.name)}
                <Card {icon} />
            {/each}
        </ul>

        {#if isIconsLeftToShow}
            <div class="text-center">
                <button
                    class="mt-12 h-12 rounded border-2 border-gray-800 bg-gray-900 px-4"
                    onclick={() => {
                        page += 1
                    }}
                >
                    Load More
                </button>
            </div>
        {/if}
    {/if}
</div>
