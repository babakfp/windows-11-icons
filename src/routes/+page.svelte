<script lang="ts">
    import Card from "$lib/components/Card.svelte"

    let { data } = $props()
</script>

<div class="container">
    {#if data.icons.length}
        <ul class="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-8">
            {#each data.icons as icon}
                <Card {icon} />
            {/each}
        </ul>
    {/if}
</div>
