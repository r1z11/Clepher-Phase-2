import { useNavigate } from 'react-router-dom';

interface Props {
    botId: number;
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

function DropdownMenu({ botId }: Props) {

    const navigate = useNavigate();

    return (
        <div key={botId} className="relative inline-block">
            <ul className="absolute z-50 top-full right-0 bg-white shadow-md rounded-xl mt-2 w-30 p-2">
                {options.map((option) => (
                    <li
                        key={option.key}
                        className="text-sm text-gray-600 hover:bg-gray-100 hover:rounded-lg px-2 py-1 cursor-pointer"
                        onClick={() => {
                            option.label == 'Dashboard' && navigate(`/dashboard/${botId}`)
                        }}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DropdownMenu;
