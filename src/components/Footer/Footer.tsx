import Logo from "../Logo"
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <Logo src="">
                <a href="https://github.com/arvidede">github.com/arvidede</a>
            </Logo>
            <Logo src="">
                <a href="https://www.linkedin.com/in/arvid-edenheim">
                    linkedin.com/in/arvid-edenheim
                </a>
            </Logo>
            <Logo src="">
                <a href="edenheim.se">edenheim.se</a>
            </Logo>
            <Logo src="">
                <a href="mailto:arvid@edenheim.se">arvid@edenheim.se</a>
            </Logo>
        </footer>
    )
}
