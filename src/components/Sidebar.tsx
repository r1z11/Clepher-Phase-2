import { AiOutlineDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { ImMagnet } from "react-icons/im";
import { ImBullhorn, ImMagicWand } from "react-icons/im";
import { GoStack } from "react-icons/go";
import { VscGraphLine } from "react-icons/vsc";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

interface Props {
    botId: string;
}

export default function Sidebar({botId}: Props) {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen px-2 justify-start bg-white border border-right border-gray-300">
            <button className="hover:bg-gray-200 rounded-lg p-3 mt-6 active:bg-cyan-950">
                <AiOutlineDashboard size={21} color='#444' />
            </button>

            <button className="hover:bg-gray-200 rounded-lg p-3">
                <FiUsers size={21} color='#444' />
            </button>

            <button className="hover:bg-gray-200 rounded-lg p-3">
                <BsChatDots size={21} color='#444' />
            </button>

            <button
                className="hover:bg-gray-200 rounded-lg p-3"
                onClick={() => navigate(`dashboard/capture/${botId}`)}>
                <ImMagnet size={21} color='#666' />
            </button>

            <button className="hover:bg-gray-200 rounded-lg p-3">
                <ImBullhorn size={21} color='#666' />
            </button>

            <button className="hover:bg-gray-200 rounded-lg p-3">
                <ImMagicWand size={21} color='#666' />
            </button>

            <button className="hover:bg-gray-200 rounded-lg p-3">
                <GoStack size={21} color='#666' />
            </button>

            <button className="hover:bg-gray-200 rounded-lg p-3">
                <VscGraphLine size={21} color='#666' />
            </button>

            <button className="hover:bg-gray-200 rounded-lg p-3">
                <HiOutlineCog6Tooth size={21} color='#666' />
            </button>
        </div>
    )
}