import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import ResponseImage, { IResponseImage } from "../ResponsiveImage"

export interface ProductThumbProps {
    name: string,
    price: number,
    rate: number,
    rateAmount: number,
    link: string,
    isFavorited: boolean,
    image: IResponseImage
}

export default function ProductThumb({ name, price, rate, rateAmount, link, isFavorited, image }: ProductThumbProps) {

    /* lg:scale-75 xl:scale-100 */

    return (
        <div className="w-[180px] h-[300px] md:w-[300px] md:h-[450px] flex flex-col m-2 mini-zoom-8">
            <div className="relative w-full h-[180px] md:h-[300px] bg-neutral-100 mb-4 rounded-2xl flex justify-center items-center">
                <ResponseImage 
                    {...image}
                    className="w-[180px] md:w-[260px]" 
                />
                {
                    isFavorited
                    ? <AiFillStar className="absolute right-0 top-0 md:right-2 md:top-2 z-10 text-[24px] md:text-[32px] text-yellow-400" />
                    : <AiOutlineStar className="absolute right-0 top-0 md:right-2 md:top-2 z-10 text-[24px] md:text-[32px] text-neutral-400" />
                }
            </div>

            <div className="w-full">
                <p className="text-sm md:text-xl font-bold">{name}</p>
                <p className="text-sm md:text-xl font-medium">R${price},00</p>
                <div className="flex items-center">
                    <div className="flex items-center">
                    { Array.from(Array(rate), (e, i) => <AiFillStar className="text-primary text-xs md:text-sm" key={i} />) }
                    { Array.from(Array(5-rate), (e, i) => <AiOutlineStar className="text-xs md:text-sm" key={i} />) }
                    </div>
                    <p className="text-sm ml-1.5">({rateAmount})</p>
                </div>
                <button className="button bg-primary rounded-full px-3.5 py-1 text-white mt-3 text-sm md:text-base w-full md:mt-5">
                    Detalhes
                </button>
            </div>

        </div>
    )
}