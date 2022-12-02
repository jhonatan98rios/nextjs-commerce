import { AiOutlineStar, AiFillStar } from "react-icons/ai";

import ResponseImage, { IResponseImage } from "../ResponsiveImage"

interface ProductThumbProps {
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
        <div className="w-[300px] h-[450px] flex flex-col m-4 lg-zoom-75 xl-zoom-90 xxl-zoom-normal">

            <div className="w-full h-[300px] bg-neutral-100 mb-4 rounded-2xl flex justify-center items-center">
                <ResponseImage 
                    {...image}
                    className="w-[260px]" 
                />
            </div>

            <div className="w-full">
                <p className="text-xl">{name}</p>
                <p className="text-xl ">R${price},00</p>
                <div className="flex items-center">
                    <div className="flex items-center">
                    { Array.from(Array(rate), (e, i) => <AiFillStar className="text-primary" />) }
                    { Array.from(Array(5-rate), (e, i) => <AiOutlineStar />) }
                    </div>
                    <p>({rateAmount})</p>
                </div>
                <button className="button bg-primary rounded-full px-3.5 py-1 text-white mt-5">
                    Detalhes
                </button>
            </div>

        </div>
    )
}