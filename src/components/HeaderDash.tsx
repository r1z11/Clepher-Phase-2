import { IoMoonOutline } from "react-icons/io5";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { GoShield } from "react-icons/go";
import { useEffect, useState } from "react";

import avatar from '../assets/images/avatar.jpeg';

interface Props {
    companyName: string;
}

export default function Header({ companyName }: Props) {

    const [handle, setHandle] = useState('');

    useEffect(() => {
        const _handle = companyName.replace(/\s+/g, "");
        setHandle(_handle);
    }, []);

    return (
        <div className="w-full h-16 flex flex-row items-center py-1 px-6 bg-white justify-between z-10 border border-bottom border-gray-300">
            <div className="flex flex-row items-center">
                <IoChatbubbleEllipsesSharp size={34} color='#444' />
                <p className="ml-6 text-lg color-gray-500">@{handle}</p>
            </div>

            <div className="flex flex-row items-center">
                <button className="mr-5 hover:bg-red-300 rounded-full p-3">
                    <GoShield size={21} color='#444' />
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