import Icon from "../Icon"
import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <section>
                <h1>Arvid Edenheim</h1>
                <h3>Software Engineer</h3>
            </section>
            <section className="icons">
                <Icon type="pin">Munich, Germany</Icon>
                <Icon type="linkedin">
                    <a href="https://www.linkedin.com/in/arvid-edenheim">
                        linkedin.com/in/arvid-edenheim
                    </a>
                </Icon>
                <Icon type="globe">
                    <a href="https://edenheim.se">edenheim.se</a>
                </Icon>
                <Icon type="email">
                    <a href="mailto:arvid@edenheim.se">arvid@edenheim.se</a>
                </Icon>
                <Icon type="github">
                    <a href="https://github.com/arvidede">
                        github.com/arvidede
                    </a>
                </Icon>
            </section>
        </header>
    )
}
