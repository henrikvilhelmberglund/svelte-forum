/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	console.log("Entered post id route");
	let commentsRes = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postID}/comments/`
	);
	let commentsData = await commentsRes.json();
	return { commentsData };
}
