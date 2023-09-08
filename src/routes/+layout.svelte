<script>
	import "@unocss/reset/tailwind.css";

	import { navigating } from "$app/stores";
</script>

{#if $navigating}
	<div class="m-10 flex flex-col items-center justify-center">
		<h1 class="mb-8 flex items-center justify-center text-5xl">Svelte - Forum</h1>
		<hr />
		<img
			src="https://i.gifer.com/ZKZg.gif"
			alt="loading gif"
			style={{ height: "120px", width: "auto" }} />
	</div>
{:else}
	<div class="flex flex-col p-10">
		<h1 class="mb-8 flex items-center justify-center text-5xl">Svelte - Forum</h1>
		<hr />
		<slot />
	</div>
{/if}

<style></style>
