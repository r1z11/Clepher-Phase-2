import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IoIosLink } from "react-icons/io";
import { BsFiletypeJson, BsPlugin } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

import HeaderDash from '../../components/HeaderDash';
import Sidebar from "../../components/Sidebar";
import { bots, links } from '../../constants/Data';
import { Bot } from '../../types';

function Capture() {

    const { botId } = useParams();

    const [bot, setBot] = useState<Bot>();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const _bot = bots.filter(item => item.id === Number(botId));
        setBot(_bot[0]);
    }, []);

    const headers = ["Message Name", "M.ME Link"];

    return (
        <div className="flex flex-col min-h-screen bg-blue-50">
            {bot && <HeaderDash companyName={bot.companyName} />}

            <div className="flex h-full w-full flex-row">
                <Sidebar botId={botId ? botId : '4'} />

                <div className="flex flex-row p-6 w-full h-full">
                    <div className="flex flex-col rounded-xl p-3 bg-white w-1/5 max-h-72">
                        <p className="text-sm text-gray-300 font-bold ml-3">Capture tools</p>

                        <div className="flex flex-row items-center mt-3 bg-gray-950 p-2 rounded-lg">
                            <IoIosLink size={18} color="#fff" />
                            <Link className="text-gray-500 ml-3 text-sm text-white" to={'#'}>Links Library</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-lg">
                            <BsFiletypeJson size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>JSON Generator</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-lg">
                            <BsPlugin size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Checkbox Plugin</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-lg">
                            <FaQrcode size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Messenger Code</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-lg">
                            <MdOutlinePostAdd size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Post Engagement</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-lg">
                            <FaFacebookMessenger size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Send to Messenger</Link>
                        </div>
                    </div>

                    <div className="flex flex-col p-3 w-4/5 ml-6">
                        <div className="flex flex-row mb-3 justify-between items-center">
                            <p className="text-lg text-gray-500">Links Library</p>

                            <div className="flex flex-row items-center border border-gray-500 rounded-lg p-2 bg-white">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="text-sm focus:outline-none"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                />
                                <IoIosSearch size={18} color="#394e6a" />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <table className="table-auto w-full rounded-xl bg-white">
                                <thead>
                                    <tr className="text-gray-500 text-left text-sm">
                                        {headers.map((header) => (
                                            <th key={header} className="px-3 py-2 border-bottom border-gray-300">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {links.map((row) => (
                                        <tr key={row.id} className="text-gray-500 text-left text-sm border-bottom border-gray-300">
                                            <td key={`msg-${row.id}`} className="pl-4 py-4">
                                                {row.message}
                                            </td>
                                            <td key={`link-${row.id}`} className="pl-4 py-4">
                                                {row.link}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Capture;