import Icon from "../Icon"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <Icon type="github">
                <a href="https://github.com/arvidede">github.com/arvidede</a>
            </Icon>
            <Icon type="globe">
                <a href="https://edenheim.se">edenheim.se</a>
            </Icon>
            <Icon type="email">
                <a href="mailto:arvid@edenheim.se">arvid@edenheim.se</a>
            </Icon>
            <Icon type="linkedin">
                <a href="https://www.linkedin.com/in/arvid-edenheim">
                    linkedin.com/in/arvid-edenheim
                </a>
            </Icon>
        </footer>
    )
}
