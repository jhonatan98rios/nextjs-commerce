import { Dispatch, SetStateAction, useState } from "react"
import { IFilters } from "../../Home/ProductsSection/filters.d"
import { ProductFilterProp } from "./index.d"
import PriceFilter from "./PriceFilter"


export default function ProductFilter({ filters, setFilters, orderBy, setOrderBy }: ProductFilterProp) {

    const [ selected, setSelected ] = useState<string>()

    return (
        <div className="w-full px-4 md:px-8 xl:px-20">
            <div className="flex justify-between py-2 md:w-full flex-wrap">
                <div className="flex py-2">
                    <button className="bg-neutral-300 px-4 py-1 rounded-lg mx-2 text-base" onClick={() => setSelected('price')}>
                        Preço
                    </button>

                    <button className="bg-neutral-300 px-4 py-1 rounded-lg mx-2 text-base" onClick={() => setSelected('category')}>
                        Categoria
                    </button>

                    <button className="bg-neutral-300 px-4 py-1 rounded-lg mx-2 text-base" onClick={() => setSelected('rating')}>
                        Avaliações
                    </button>
                </div>

                <div className="flex py-2">
                    <button className="bg-neutral-300 px-4 py-1 rounded-lg mx-2 text-base" onClick={() => setSelected('orderby')}>
                        Ordernar por
                    </button>
                </div>
            </div>

            { 
                selected == 'price' && 
                <PriceFilter filters={filters} setFilters={setFilters} setSelected={setSelected} />
            }

        </div>
    )
}