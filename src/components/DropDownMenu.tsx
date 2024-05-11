import { useEffect, useState } from 'react';

interface MenuProps {
    options: {
        key: string;
        label: string;
    }[]
}

function DropdownMenu({ options }: MenuProps) {

    return (
        <div className="relative inline-block">
            <ul className="absolute z-50 top-full right-0 bg-white shadow-md rounded-xl mt-2 w-30 p-2">
                {options.map((option) => (
                    <li
                        key={option.key}
                        className="text-sm text-gray-600 hover:bg-gray-100 hover:rounded-lg px-2 py-1 cursor-pointer"
                        onClick={() => {
                            // Handle option click here (optional)
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
