export default async function Blog() {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await data.json();

    return (
        <main className="container">
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => {
                    <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </main>
    )
}