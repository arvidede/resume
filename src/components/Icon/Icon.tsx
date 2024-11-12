import { FunctionComponent, ReactNode } from "react"
import GitHub from "./GitHub"
import Email from "./Email"
import LinkedIn from "./LinkedIn"
import Globe from "./Globe"
import Pin from "./Pin"
import "./Icon.css"

type Icon = "github" | "linkedin" | "globe" | "email" | "pin"

interface Props {
    type: Icon
    children?: ReactNode
}

const ICON_MAP: Record<Icon, FunctionComponent> = {
    github: GitHub,
    email: Email,
    globe: Globe,
    linkedin: LinkedIn,
    pin: Pin,
}

export default function Icon({ type, children }: Props) {
    const Icon = ICON_MAP[type]
    return (
        <div className="container">
            <div className="icon">
                <Icon />
            </div>
            <span>{children}</span>
        </div>
    )
}
