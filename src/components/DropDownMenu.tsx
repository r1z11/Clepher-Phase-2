import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    botId: number;
    options: {
        key: string;
        label: string;
    }[]
    width: string;
    action?: () => void;
}

function DropdownMenu({ botId, options, width, action }: Props) {
    
    const navigate = useNavigate();

    const [selection, setSelection] = useState('');

    return (
        <div key={botId} className="relative inline-block">
            <ul className={"absolute z-50 top-full right-0 bg-white shadow-md rounded-xl mt-2 p-2 " + width}>
                {options.map((option) => (
                    <button
                        key={option.key}
                        className="text-sm text-gray-600 hover:bg-gray-100 hover:rounded-lg px-2 py-1 cursor-pointer w-full text-left"
                        onClick={() => {
                            option.label == 'Dashboard' && navigate(`/dashboard/${botId}`);
                            action && action();
                            setSelection(option.key);
                        }}
                    >
                        {option.label}
                    </button>
                ))}
            </ul>
        </div>
    );
}

export default DropdownMenu;
