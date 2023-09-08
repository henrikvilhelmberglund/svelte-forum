/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	let response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`);
	let data = await response.json();
	console.log(data);
	return data;
}
