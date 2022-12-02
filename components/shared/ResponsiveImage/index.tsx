export interface IResponseImage {
    touch: string
    desktop: string,
    alt?: string,
    title?: string,
    className?: string
    imgClassName?: string
}

export default function ResponseImage({ touch, desktop, alt, title, className }: IResponseImage) {
    return (
        <picture>
            <source media="(max-width: 767px)" srcSet={touch} />
            <source srcSet={desktop} />
            <img className={className} src={desktop} alt={alt} title={title} />
        </picture>
    )
}