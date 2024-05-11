import logo from '../assets/images/clepher-logo-black.png';

import { TbBell } from "react-icons/tb";
import { IoMoonOutline } from "react-icons/io5";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header() {
    return (
        <div className="w-full flex flex-row align-center py-3 px-6 bg-white justify-between">
            <img src={logo} className="h-9 mt-3" />

            <div>
                <button className="mr-5 hover:bg-gray-300 rounded-full p-3">
                    <TbBell size={21} color='#444' />
                </button>

                <button className="mr-5 hover:bg-gray-300 rounded-full p-3">
                    <IoMoonOutline size={21} color='#444' />
                </button>

                <button className="mr-5 hover:bg-gray-300 rounded-full p-3">
                    <IoHelpBuoyOutline size={21} color='#444' />
                </button>

                <button className="mr-5 hover:bg-gray-300 rounded-full p-3">
                    <FaRegCircleUser size={27} color='#666' />
                </button>
            </div>
        </div>
    )
}