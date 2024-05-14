import { useState } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAction: (name: string) => void;
}
const Modal = ({ isOpen, onClose, onAction }: Props) => {
    const [name, setName] = useState('');

    return (
        <>
            {isOpen &&
                <div className="fixed top-0 left-0 w-full h-full backdrop-opacity-50 bg-gray-900/50 z-50">
                    <div className="fixed z-60 w-1/2 left-1/4 top-1/4 bg-white rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-500">Please enter a new name</p>
                            <button
                                className="text-gray-500 float-right hover:bg-gray-200 rounded-full px-3 py-1"
                                onClick={() => onClose()}
                            >X</button>
                        </div>

                        <input
                            className="border rounded-md w-full py-2 px-3 text-gray-500 placeholder-gray-300 mt-6 focus:ring-gray-400"
                            placeholder="Enter text here"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <div className="flex items-center justify-between mt-6">
                            <button
                                className="text-gray-500 bg-transparent px-3 py-2 border border-gray-400 rounded-lg text-sm"
                                type="button"
                                onClick={() => onClose()}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-white text-sm bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg"
                                type="button"
                                onClick={() => onAction(name)}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default Modal;