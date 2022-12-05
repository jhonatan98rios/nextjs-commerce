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