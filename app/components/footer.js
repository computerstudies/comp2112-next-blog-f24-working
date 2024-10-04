export default function Footer() {
    return (
        <section classNamer="bg-light text-center fixed-bottom p-3">
            <div className="container">
                COMP2112 | &copy; 2024 | Total Session Clicks: <span id="sessionCounter">0</span>
            </div>
        </section>
    )
}