import { Fragment, ReactNode } from "react"
import "./Paragraph.css"

interface Props {
    title?: string
    children?: ReactNode
    content?: string | string[]
}

function renderContent(content?: string | string[]) {
    if (!content) return null
    return Array.isArray(content) ? (
        <p>
            {content.map((it, idx) => (
                <Fragment key={idx}>
                    {it}
                    <br />
                </Fragment>
            ))}
        </p>
    ) : (
        <p>{content}</p>
    )
}

export default function Paragraph({ title, content, children }: Props) {
    return (
        <section className="paragraph">
            {title && <h3>{title}</h3>}
            {renderContent(content)}
            {children}
        </section>
    )
}
