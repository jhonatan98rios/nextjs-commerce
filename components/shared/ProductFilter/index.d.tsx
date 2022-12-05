import { Dispatch, SetStateAction, useState } from "react"
import { IFilters } from "../../Home/ProductsSection/filters.d"

export interface FiltersProp {
    filters: IFilters
    setFilters: Function
}

export interface OrderByProp {
    orderBy: string
    setOrderBy: Function
}

export interface ProductFilterProp extends OrderByProp, FiltersProp {}