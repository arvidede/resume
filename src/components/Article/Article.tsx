import Chip from "../Chip"
import Paragraph from "../Paragraph"
import "./Article.css"

interface Paragraph {
    title?: string
    content?: string | string[]
    children?: Paragraph[]
}

interface BaseArticle {
    title: string
}

interface ArticleWithParagraphs extends BaseArticle {
    title: string
    paragraphs: Paragraph[]
    chips?: never
}

interface ArticleWithChips extends BaseArticle {
    title: string
    paragraphs?: never
    chips: string[]
}

type Article = ArticleWithParagraphs | ArticleWithChips

type Props = {
    article: Article
}

function renderParagraphs(paragraphs?: Paragraph[]) {
    if (!paragraphs) return null
    return paragraphs.map((paragraph) => (
        <Paragraph title={paragraph.title} content={paragraph.content}>
            {paragraph.children?.map((child) => (
                <Paragraph title={child.title} content={child.content} />
            ))}
        </Paragraph>
    ))
}

function renderChips(chips?: string[]) {
    if (!chips) return null
    return (
        <div className="chips">
            {chips.map((it, idx) => (
                <Chip key={idx} text={it} />
            ))}
        </div>
    )
}

export default function Article({
    article: { title, chips, paragraphs },
}: Props) {
    return (
        <article className="article">
            <h2>{title}</h2>
            <section>
                {renderParagraphs(paragraphs)}
                {renderChips(chips)}
            </section>
        </article>
    )
}
