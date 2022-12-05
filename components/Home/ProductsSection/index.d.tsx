import { IResponseImage } from "../../shared/ResponsiveImage"

export interface IFilters {
    price: {
        min: string | null,
        max: string | null,
    },
    categoty: string[],
    rating: {
        min: number,
        max: number,
    }
}

export interface IProduct {
    name: string,
    price: number,
    rate: number,
    rateAmount: number,
    link: string,
    isFavorited: boolean,
    image: IResponseImage
}