import { ReactNode } from "react"

interface Props {
    src: string
    alt?: string
    children?: ReactNode
}

export default function Logo({ src, alt, children }: Props) {
    return (
        <div>
            {src && <img src={src} alt={alt} />}
            <span>{children}</span>
        </div>
    )
}
