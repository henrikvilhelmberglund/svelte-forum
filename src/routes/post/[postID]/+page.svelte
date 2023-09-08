<script>
	import { page } from "$app/stores";
	import GoBack from "$lib/components/GoBack.svelte";
	export let data;

	const postId = parseInt($page.params.postID);
	const { commentsData, postsData, usersData } = data;

	const { title, body, userId } = postsData.find((post) => post.id === postId);
	const { username } = usersData.find((user) => user.id === userId);
</script>

<div class="flex flex-col items-center justify-center">
	<div class="my-8">
		<GoBack />
	</div>
	<div class="w-1/2 bg-gray-200 p-2 px-8 py-3 shadow-md shadow-slate-400">
		<h1 class="text-3xl">{title}</h1>
		<p class="pt-4 text-lg">{body}</p>
		<div class="flex w-full justify-center">
			<a class="m-4 rounded bg-blue-300 p-2 hover:bg-blue-400" href={`/profile/${userId}`}>
				User: {username} (id {userId})
			</a>
		</div>
		<aside>
			<hr class="my-4 border border-solid border-black" />
			Comments
			{#each commentsData as { name, body, id, email }}
				<div class="m-2 rounded bg-slate-300 p-2">
					<p class="text-3xl">{name}</p>
					<p class="text-xl">{body}</p>
					<p class="pt-4 text-xl">
						<span>
							by
							<a class="pl-1 text-blue-600" href={`mailto:${email}`}>
								{email}
							</a>
						</span>
					</p>
				</div>
			{/each}
		</aside>
	</div>
</div>

<style>
</style>
