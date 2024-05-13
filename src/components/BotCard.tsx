
import { useState } from "react";

import { HiOutlineCog8Tooth } from "react-icons/hi2";

import Instagram from "../assets/images/instagram.svg";
import Messenger from "../assets/images/cm-messenger-icon-blurple.svg";
import DropDownMenu from "./DropDownMenu";
import { Bot } from "../types";
import { useNavigate } from "react-router-dom";


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

function BotCard({ id, avatar, companyName, category, totalSubscribers, activeSubscribers }: Bot) {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const action = (key: string) => {
        console.log('action in bot card', key)
        if(key == '1'){
            navigate(`/dashboard/${id}`)
        }
    }

    return (
        <div key={id} className="bg-white p-10 m-3 rounded-xl">
            <div className="flex flex-row items-center">
                <img src={avatar} width={30} height={30} className="mr-3 rounded-full shadow-lg w-1/6" />

                <div className="flex flex-row w-5/6">
                    <div className="flex flex-col text-left w-3/4 mr-3">
                        <p className="text-md text-gray-500">{companyName}</p>
                        <p className="text-xs text-gray-500">{category}</p>
                    </div>

                    <div className="flex flex-col w-1/4 items-end">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <HiOutlineCog8Tooth size={19} color="#666" />
                        </button>
                        {isOpen && <DropDownMenu botId={id} options={options} width="w-30" action={() => action} />}

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
                    <p className="text-sm text-blue-500">{totalSubscribers}</p>
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
