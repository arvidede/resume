import Article from "../Article"
import experience from "../../assets/experience.json"
import "./Experience.css"

export default function Experience() {
    return (
        <div className="experience">
            {Object.values(experience).map((article) => (
                <Article article={article} />
            ))}
        </div>
    )
}
