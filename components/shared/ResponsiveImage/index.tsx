interface IResponseImage {
    touch: string
    desktop: string,
    alt?: string,
    title?: string
}

export default function ResponseImage({ touch, desktop, alt, title }: IResponseImage) {
    return (
        <picture>
            <source media="(max-width: 767px)" srcSet={touch} />
            <source srcSet={desktop} />
            <img src={desktop} alt={alt} title={title} />
        </picture>
    )
}