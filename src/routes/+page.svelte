<script>
	export let data;

	let { postsData } = data;
</script>

<div class="flex flex-col items-center">
	<div />
</div>
<div class="flex justify-center">
	<div>
		{#each postsData as post}
			<div class="m-4 rounded border-2 border-black p-2 shadow-md shadow-gray-400" key={post.id}>
				<h2>
					<span class="text-lg font-bold">Title: </span>
					<a class="text-black underline hover:text-blue-500" href={`post/${post.id}`}>
						{post.title}
					</a>
				</h2>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
