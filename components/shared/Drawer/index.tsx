import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function Drawer() {

    const [active, setActive] = useState(false)

    return (
        <>
            {
                active 
                ? <AiOutlineClose className="absolute left-[24px] md:hidden" onClick={() => setActive(false)} /> 
                : <AiOutlineMenu className="absolute left-[24px] md:hidden" onClick={() => setActive(true)} />
            }            

            <nav className={`w-9/12 absolute md:hidden top-[64px] bg-white h-screen left-0 drop-shadow-xl ${ active ? 'drawer-active' : 'drawer-deactivated' }`}>
                <ul className="px-8">
                    <li className="my-4"> PRODUTOS </li>
                    <li className="my-4"> SOBRE </li>
                    <li className="my-4"> CONTATO </li>
                    <li className="my-4"> CARRINHO </li>
                    <li className="my-4"> PERFIL </li>
                </ul>
            </nav>
        </>
    )

}