import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import Drawer from "../Drawer";

export default function Navbar() {

    return (
        <div className="flex justify-center items-center w-full h-16 md:h-24 border-b-2 border-neutral-100 bg-white fixed z-50">
            <Drawer />
            <nav>
                <ul className="hidden md:flex">
                    <li className="mx-6 text-neutral-800 text-sm"> PRODUTOS </li>
                    <li className="mx-6 text-neutral-800 text-sm"> SOBRE </li>
                    <li className="mx-6 text-neutral-800 text-sm"> CONTATO </li>
                </ul>
            </nav>
            <div className="md:flex absolute right-[24px] md:right-[72px]">
                <AiOutlineSearch className="mx-3 text-2xl text-neutral-800" />
                <AiOutlineShoppingCart className="mx-3 text-2xl hidden md:flex text-neutral-800" />
                <AiOutlineUser className="mx-3 text-2xl hidden md:flex text-neutral-800" />
            </div>
        </div>
    )
}