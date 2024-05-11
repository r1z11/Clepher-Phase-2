import { HiOutlineCog8Tooth } from "react-icons/hi2";

import Instagram from "../assets/images/instagram.svg";
import Messenger from "../assets/images/cm-messenger-icon-blurple.svg";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

interface BotProps {
    avatar: string;
    companyName: string;
    category: string;
    subscribers: number;
    activeSubscribers: number;
}

// Drop down menu options
const options = [
    {
        key: '1',
        label: 'Dashboard',
    },
    {
        key: '2',
        label: 'Delete',
    }
]

function BotCard({ avatar, companyName, category, subscribers, activeSubscribers }: BotProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white p-10 m-3 rounded-xl">
            <div className="flex flex-row align-center">
                <img src={avatar} width={50} className="mr-2 rounded-full shadow-lg" />

                <div className="flex flex-row">
                    <div className="flex-col text-left">
                        <p className="text-md text-gray-500">{companyName}</p>
                        <p className="text-xs text-gray-500">{category}</p>
                    </div>

                    <div className="flex-col">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <HiOutlineCog8Tooth size={19} color="#666" />
                        </button>
                        {isOpen && <DropDownMenu options={options} />}

                        <div className="flex flex-row mt-2">
                            <img src={Instagram} width={16} />

                            <div className="p-1 bg-white rounded-full -ml-2">
                                <img src={Messenger} width={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row mt-6">
                <div className="flex-col mr-6 text-left w-1/2">
                    <p className="text-xs text-gray-500">Total subscribers</p>
                    <p className="text-sm text-blue-500">{subscribers}</p>
                </div>

                <div className="flex-col text-left w-1/2">
                    <p className="text-xs text-gray-500">Active subscribers</p>
                    <p className="text-sm text-blue-500">{activeSubscribers}</p>
                </div>
            </div>
        </div>
    );
}

export default BotCard;
