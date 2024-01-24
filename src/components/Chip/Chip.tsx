import "./Chip.css"

interface Props {
    text: string
}

export default function Chip({ text }: Props) {
    return <span className="chip">{text}</span>
}
