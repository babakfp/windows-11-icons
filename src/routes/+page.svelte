<script lang="ts">
    import Card from "$lib/components/Card.svelte"

    let { data } = $props()
</script>

<div class="container pb-24 pt-12">
    <input
        class="h-12 w-full rounded border-2 border-gray-800 bg-gray-900 px-4 reset-search-input"
        type="search"
        placeholder="Search icons..."
    />

    {#if data.icons.length}
        <ul
            class="mt-12 grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-8"
        >
            {#each data.icons.slice(0, 12) as icon}
                <Card {icon} />
            {/each}
        </ul>
    {/if}
</div>
