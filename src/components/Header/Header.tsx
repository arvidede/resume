import Avatar from "../Avatar"
import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <Avatar />
            <section>
                <h1>Arvid Edenheim</h1>
                <h3>Software Engineer</h3>
            </section>
        </header>
    )
}
