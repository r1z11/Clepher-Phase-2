import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IoIosLink, IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { BsFiletypeJson, BsPlugin } from "react-icons/bs";
import { FaQrcode } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";

import Instagram from "../../assets/images/instagram.svg";
import Messenger from "../../assets/images/cm-messenger-icon-blurple.svg";

import HeaderDash from '../../components/HeaderDash';
import Sidebar from "../../components/Sidebar";
import { bots, postEngagements } from '../../constants/Data';
import { Bot } from '../../types';
import DropDownMenu from '../../components/DropDownMenu';


// Bulk actions dropdown menu options
const bulkOptions = [
    {
        key: '1',
        label: 'Delete',
    }
]

// Post engagement actions dropdown menu options
const postOptions = [
    {
        key: '1',
        label: 'Edit',
    },
    {
        key: '2',
        label: 'Rename',
    },
    {
        key: '3',
        label: 'Delete',
    }
]

function PostEngagements() {

    const { botId } = useParams();

    const [bot, setBot] = useState<Bot>();
    const [query, setQuery] = useState('');
    const [bulkActionOpen, setBulkActionOpen] = useState(false);
    const [postActionOpenItems, setPostActionOpenItems] = useState(new Array(postEngagements.length).fill(false));
    const [checkedItems, setCheckedItems] = useState(new Array(postEngagements.length).fill(false));
    const [engagements, setEngagements] = useState<{ id: number; icon: string; name: string; eu: { engaged: number; unique: number; }; acquired: number; conversion: string; }[]>()

    // Get bot details
    useEffect(() => {
        const _bot = bots.filter(item => item.id === Number(botId));
        setBot(_bot[0]);
        // initialize post engagements
        setEngagements(postEngagements);
    }, []);

    // Handle toggling checkboxes
    const handleCheckbox = (index: number) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !checkedItems[index];
        setCheckedItems(updatedCheckedItems);
    }

    // Handle toggling dropdown menus
    const handleActions = (index: number) => {
        console.log('index', index)
        const updatedPostActionOpenItems = [...postActionOpenItems];
        console.log('updated items', updatedPostActionOpenItems)
        updatedPostActionOpenItems[index] = !postActionOpenItems[index];
        console.log('updated item', updatedPostActionOpenItems[index])
        setPostActionOpenItems(updatedPostActionOpenItems);
    }

    // Bulk delete post engagements
    const deleteEngagements = () => {
        if (engagements) {
            const items = [...engagements];
            for (let i = 0; i < engagements.length; i++) {
                if (checkedItems[i] === true) {
                    items.splice(i, 1);
                }
            }
            setEngagements(items);
        }
        console.log('delete es', engagements)
    }

    // Delete single post engagements
    const deleteEngagement = (key: string) => {
        if (engagements && key == '3') {
            const items = [...engagements];
            for (let i = 0; i < engagements.length; i++) {
                if (postActionOpenItems[i]) {
                    items.splice(i, 1);
                }
            }
            setEngagements(items);
        }
    }

    // Table header
    const headers = ["", "", "Name", "Engaged / Unique", "Acquired", "Conversion", "Action"];

    return (
        <div className="flex flex-col min-h-screen bg-blue-50">
            {bot && <HeaderDash companyName={bot.companyName} />}

            <div className="flex h-full w-full flex-row">
                <Sidebar botId={botId ? botId : '4'} page="posts" />

                <div className="flex flex-row p-6 w-full h-full">
                    <div className="flex flex-col rounded-xl p-3 bg-white w-1/5 max-h-72">
                        <p className="text-sm text-gray-300 font-bold ml-3">Capture tools</p>

                        <div className="flex flex-row items-center mt-1 p-2 rounded-lg">
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

                        <div className="flex flex-row items-center mt-1 bg-sky-950 hover:bg-gray-200 p-2 rounded-lg">
                            <MdOutlinePostAdd size={18} color="#fff" />
                            <Link className="text-white ml-3 text-sm" to={'#'}>Post Engagements</Link>
                        </div>

                        <div className="flex flex-row items-center mt-1 hover:bg-gray-200 p-2 rounded-lg">
                            <FaFacebookMessenger size={18} color="#394e6a" />
                            <Link className="text-gray-500 ml-3 text-sm" to={'#'}>Send to Messenger</Link>
                        </div>
                    </div>

                    <div className="flex flex-col p-3 w-4/5 ml-6">
                        <div className="flex flex-row mb-3 justify-between items-center">
                            <p className="text-lg text-gray-500">Post Engagements</p>

                            <div className="flex flex-row items-center">
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

                                <div className="flex flex-row items-center ml-3 border border-sky-950 bg-white px-3 py-2 rounded-lg hover:bg-sky-950 text-sky-950 hover:text-white">
                                    <button className="text-sm mr-2 font-bold" onClick={() => setBulkActionOpen(!bulkActionOpen)}>Bulk Actions</button>
                                    <IoMdArrowDropdown size={18} />
                                </div>
                                <div className="mt-3">
                                    {bulkActionOpen && <DropDownMenu botId={Number(botId)} options={bulkOptions} width="w-60" action={() => deleteEngagements()} />}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <table className="table-auto w-full rounded-xl bg-white">
                                <thead>
                                    <tr className="text-gray-500 text-left text-sm">
                                        {headers.map((header) => (
                                            <th key={`header-${header}`} className="px-3 py-2 border-bottom border-gray-300">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {engagements && engagements.map((row, index) => (
                                        <tr key={`row-${index}`} className="text-gray-500 text-left text-sm border-bottom border-gray-300 pl-4 py-4">
                                            <td key={`check-${row.id}`} className="pl-4 py-4">
                                                <input type="checkbox" checked={checkedItems[row.id]} onChange={(e) => handleCheckbox(row.id)} className="border border-gray-300 rounded-full" />
                                            </td>
                                            <td key={`icon-${row.eu}`} className="pl-4 py-4">
                                                {row.icon == 'instagram' ?
                                                    <img src={Instagram} height={16} width={16} /> : <img src={Messenger} height={16} width={16} />}
                                            </td>
                                            <td key={`name-${row.id}`} className="pl-4 py-4">
                                                {row.name}
                                            </td>
                                            <td key={`eu-${row.id}`} className="pl-4 py-4">
                                                {row.eu.engaged} / {row.eu.unique}
                                            </td>
                                            <td key={`acquired-${row.id}`} className="pl-4 py-4">
                                                {row.acquired}
                                            </td>
                                            <td key={`conversion-${row.id}`} className="pl-4 py-4">
                                                {row.conversion}
                                            </td>
                                            <td key={`action-${index}`} className="pl-4 py-4">
                                                <button key={`btn-${index}`} className="border border-sky-950 bg-white px-2 py-1 rounded-lg text-xs text-sky-950 hover:bg-sky-950 hover:text-white font-bold" onClick={() => handleActions(postActionOpenItems[index])}>Actions</button>

                                                {postActionOpenItems[index] && <DropDownMenu key={`menu-${index}`} botId={Number(botId)} options={postOptions} width="w-30" action={() => {}}/>}
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

export default PostEngagements;