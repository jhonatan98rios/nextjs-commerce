import { useEffect, useState } from "react"
import ProductFilter from "../../shared/ProductFilter"
import ProductThumb, { ProductThumbProps } from "../../shared/ProductThumb"
import { IFilters, IProduct } from "./index.d"

function ProductSection({ products }: { products: IProduct[] }) {

  const [filters, setFilters] = useState<IFilters>({
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

  const [orderBy, setOrderBy] = useState<string>('')

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

export default ProductSection