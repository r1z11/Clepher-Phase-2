import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IoIosLink } from "react-icons/io";
import { BsFiletypeJson, BsPlugin } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";

import HeaderDash from '../../components/HeaderDash';
import Sidebar from "../../components/Sidebar";
import { bots } from '../../constants/Data';
import { Bot } from '../../types';

function Capture() {

    const { botId } = useParams();

    const [bot, setBot] = useState<Bot>();

    useEffect(() => {
        const _bot = bots.filter(item => item.id === Number(botId));
        setBot(_bot[0]);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-blue-50">
            {bot && <HeaderDash companyName={bot.companyName} />}

            <div className="flex h-full w-full flex-row">
                <Sidebar botId={botId ? botId : '4'} />

                <div className="flex flex-row p-6 w-full h-full">
                    <div className="flex flex-col rounded-xl p-3 bg-white w-1/5">
                        <p className="text-sm text-gray-300 font-bold ml-3">Capture tools</p>

                        <div className="flex flex-row items-center mt-3 hover:bg-gray-200 p-2 rounded-xl">
                            <IoIosLink size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Links Library</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-xl">
                            <BsFiletypeJson size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>JSON Generator</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-xl">
                            <BsPlugin size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Checkbox Plugin</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-xl">
                            <FaQrcode size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Messenger Code</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-xl">
                            <MdOutlinePostAdd size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Post Engagement</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-xl">
                            <FaFacebookMessenger size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Send to Messenger</Link>
                        </div>
                    </div>

                    <div className="flex flex-col rounded-xl p-3 bg-white w-4/5 ml-6">

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-xl">
                            <FaFacebookMessenger size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Send to Messenger</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Capture;