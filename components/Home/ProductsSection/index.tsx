import ProductThumb from "../../shared/ProductThumb"

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
        price: 3000,
        rate: 2,
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
    return (
        <section className="py-12">

            <div className="container mx-auto">
                {/* Filters and Orders */}

                <div className="flex flex-wrap justify-center">
                    {
                        products.map((product, index) => <ProductThumb {...product} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}