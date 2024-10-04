import Member from "../components/member"

export default function About() {
    return (
        <main>
            <h1>About this Site</h1>
            <p>We built this as our 1st React page component.</p>
            <section>
                <h2>Team Members</h2>
                <Member name="Rich" title="Professor" />
                <Member name="Marilyn" title="Account Exec" />
                <Member name="Alex" title="Lawyer" />
            </section>
        </main>
    )
}