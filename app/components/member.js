export default function Member({ name, title }) {
    return (
        <article className="card">
            <h2 className="card-title">{name}</h2>
            <p className="card-body">{title}</p>
        </article>
    )
}