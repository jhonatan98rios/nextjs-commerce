import { useState } from "react"
import ProductFilter from "../../shared/ProductFilter"
import ProductThumb from "../../shared/ProductThumb"
import { IFilters } from "./filters.d"

const products = [
    {
        name: 'Dualsense',
        price: 800,
        rate: 5,
        rateAmount: 100,
        link: '#',
        isFavorited: false,
        image: {
            desktop: '/mock/desktop/dualshock.png',
            touch: '/mock/touch/dualshock.png',
        }
    },
    {
        name: 'Controle Xbox',
        price: 600,
        rate: 4,
        rateAmount: 100,
        link: '#',
        isFavorited: true,
        image: {
            desktop: '/mock/desktop/xbox-shift.png',
            touch: '/mock/touch/xbox-shift.png',
        }
    },
    {
        name: 'Playstation 4 - HD 500gb',
        price: 3000,
        rate: 3,
        rateAmount: 100,
        link: '#',
        isFavorited: false,
        image: {
            desktop: '/mock/desktop/ps4.png',
            touch: '/mock/touch/ps4.png',
        }
    },
    {
        name: 'RTX 3050 - 8GB VRAM',
        price: 4000,
        rate: 5,
        rateAmount: 100,
        link: '',
        isFavorited: false,
        image: {
            desktop: '/mock/desktop/gpu.png',
            touch: '/mock/touch/gpu.png',
        }
    },
]

export default function ProductSection() {

    const [ filters, setFilters ] = useState<IFilters>({
        categoty: [''],
        price: {
            max: null,
            min: null
        },
        rating: {
            max: 5,
            min: 0
        }
    })

    const [ orderBy, setOrderBy ] = useState<string>('')

    return (
        <section className="py-12">
            <div className="container mx-auto">
                <ProductFilter 
                    filters={filters} 
                    setFilters={setFilters} 
                    orderBy={orderBy} 
                    setOrderBy={setOrderBy} 
                />

                <div className="flex flex-wrap justify-center mt-12 min-h-[500px]">
                    {
                        products
                            .filter(
                                product => (filters.price.min ? product.price >= +filters.price.min : true) 
                                        && (filters.price.max ? product.price <= +filters.price.max : true)
                            )
                            .map((product, index) => <ProductThumb {...product} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}