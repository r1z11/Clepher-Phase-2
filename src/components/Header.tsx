import logo from '../assets/images/clepher-logo-black.png';
import avatar from '../assets/images/avatar.jpeg';

import { TbBell } from "react-icons/tb";
import { IoMoonOutline } from "react-icons/io5";
import { IoHelpBuoyOutline } from "react-icons/io5";

export default function Header() {
    return (
        <div className="w-full flex flex-row items-center py-1 px-6 bg-white justify-between">
            <img src={logo} className="h-9" />

            <div className="flex flex-row items-center">
                <button className="mr-5 hover:bg-gray-300 rounded-full p-3">
                    <TbBell size={21} color='#444' />
                </button>

                <button className="mr-5 hover:bg-gray-300 rounded-full p-3">
                    <IoMoonOutline size={21} color='#444' />
                </button>

                <button className="mr-5 hover:bg-gray-300 rounded-full p-3">
                    <IoHelpBuoyOutline size={21} color='#444' />
                </button>

                <button className="hover:bg-gray-300 rounded-full p-3">
                    <img src={avatar} height={36} width={36} className="rounded-full" />
                </button>
            </div>
        </div>
    )
}