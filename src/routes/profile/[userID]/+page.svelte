<script>
	import GoBack from "$lib/components/GoBack.svelte";

	export let data;
</script>

<div class="mt-8 flex flex-col items-center justify-center">
	<GoBack />
	<div
		class="flex w-1/2 flex-col items-center justify-center rounded bg-blue-300 p-2 py-7 shadow-xl shadow-slate-400">
		<h3 class="mb-4 text-2xl">Information about {data.username}</h3>
		<p>Name: {data.name}</p>
		<p>Email: {data.email}</p>
		<p>City: {data.address.city}</p>
		<p>Company: {data.company.name}</p>
	</div>
</div>

<style>
</style>
