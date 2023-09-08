export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	let postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	let postsData = await postsRes.json();
	let usersRes = await fetch(`https://jsonplaceholder.typicode.com/users`);
	let usersData = await usersRes.json();
	return { postsData, usersData };
}
