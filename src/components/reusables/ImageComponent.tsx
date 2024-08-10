import Image from "next/image"
interface imageProps {
    src: string,
    width?: number,
    height?: number,
    alt: string,
    classes?: string,
    onClick?: () => void;
}

const ImageComponent = (props: imageProps) => {
    const { src, width, height, alt, classes, onClick } = props || {};
    return <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={`${classes}`}
        onClick={onClick}
    />
}

export default ImageComponent;

