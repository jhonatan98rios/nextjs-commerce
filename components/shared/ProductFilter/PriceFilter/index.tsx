import { ChangeEvent, Dispatch } from "react";
import { IFilters } from "../../../Home/ProductsSection/index.d";
import { FiltersProp, OrderByProp } from "../index.d";

import CurrencyInput from 'react-currency-input-field';
import { AiOutlineClose } from "react-icons/ai";

interface PriceFilterProp extends FiltersProp {
    setSelected: Function
}

export default function PriceFilter({ filters, setFilters, setSelected }: PriceFilterProp) {

    function setPrice(key: string, value?: string) {
        setFilters({ ...filters,
            price: {
                ...filters?.price,
                [key]: value
            }
        })
    }

    return (
        <div className="price-range w-full py-2 flex rounded-lg bg-neutral-100">
            
            <div className="flex flex-col">
                <CurrencyInput
                    className="border w-40 mx-2 focus:outline-none p-2 rounded-lg"
                    placeholder="Mínimo"
                    fixedDecimalLength={0}
                    allowNegativeValue={false}
                    intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    onValueChange={(value, name) => setPrice('min', value)}
                    defaultValue={filters.price.min as string}
                />
            </div>

            <div className="flex flex-col">
                <CurrencyInput
                    className="border w-40 mx-2 focus:outline-none p-2 rounded-lg"
                    placeholder="Máximo"
                    fixedDecimalLength={0}
                    allowNegativeValue={false}
                    intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    onValueChange={(value, name) => setPrice('max', value)}
                    defaultValue={filters.price.max as string}
                />
            </div>

            <div className="flex items-center ml-auto px-2" onClick={() => setSelected(null)}>
                <AiOutlineClose />            
            </div>

        </div>
    )
}