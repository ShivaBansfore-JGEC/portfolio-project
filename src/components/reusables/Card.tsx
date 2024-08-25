
import ImageComponent from "./ImageComponent";


interface cardProps {
    title: string,
    descriptions: string,
    theme?: 'dark' | 'light',
    imageProps?: any

}

const Card = (props: cardProps) => {
    const { title, descriptions, theme, imageProps = { src: '', alt: '' } } = props || {};
    return (
        <div className={`card card-${theme}`}>
            <ImageComponent {...imageProps} />
            <p className="card-title">{title}</p>
            <p className="card-descriptions">{descriptions}</p>
        </div>
    )
}

export default Card;