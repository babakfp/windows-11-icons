<script lang="ts">
    import Card from "$lib/components/Card.svelte"

    let { data } = $props()

    let iconsToShow = $state(data.icons.slice(0, 12))
    let searchTerm = $state("")

    $effect(() => {
        if (searchTerm) {
            iconsToShow = data.icons.filter((icon) =>
                icon.title.toLowerCase().includes(searchTerm.toLowerCase()),
            )
        } else {
            iconsToShow = data.icons.slice(0, 12)
        }
    })
</script>

<div class="container pb-24 pt-12">
    <input
        class="h-12 w-full rounded border-2 border-gray-800 bg-gray-900 px-4 reset-search-input"
        type="search"
        placeholder="Search icons..."
        bind:value={searchTerm}
    />

    {#if iconsToShow.length}
        <ul
            class="mt-12 grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-8"
        >
            {#each iconsToShow.slice(0, 12) as icon}
                <Card {icon} />
            {/each}
        </ul>
    {/if}
</div>
