<script lang="ts">
    import "$lib/app.css"

    let { children } = $props()
</script>

<main class="container pb-16 pt-8">
    {@render children()}
</main>

<footer class="border-t border-gray-800 py-8">
    <ul class="container list-inside list-disc space-y-2 text-sm">
        <li>
            Made by
            <a class="underline" href="https://babakfp.ir" target="_blank">
                Babak
            </a>
        </li>
        <li>
            Source code on
            <a
                class="underline"
                href="https://github.com/babakfp/windows-11-icons"
                target="_blank"
            >
                GitHub
            </a>
        </li>
    </ul>
</footer>
