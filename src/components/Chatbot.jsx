import React, { useState } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {!isOpen && (

                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow flex items-center"
                    onClick={handleToggleChatbot}
                >
                    <svg
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        
                    >
                        <path
                            d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z"
                            stroke="#fff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15 12C14.2005 12.6224 13.1502 13 12 13C10.8498 13 9.79952 12.6224 9 12"
                            stroke="#fff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 8.01953V8"
                            stroke="#fff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15 8.01953V8"
                            stroke="#fff"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    {/* Open Chatbot */}
                </button>
            )
            }

            {isOpen && (
                <div className="w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col">
                    <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
                        <span>Chatbot</span>
                        <button
                            className="text-white"
                            onClick={handleToggleChatbot}
                        >
                            X
                        </button>
                    </div>
                    <div className="p-4 pt-16 flex-grow flex flex-col justify-center items-center text-center overflow-auto">
                        <div className="self-start mb-2 bg-gray-200 p-2 rounded-lg shadow-md">
                            <p>Hello! How can I assist you today?</p>
                        </div>
                        <div className="self-end mb-2 bg-blue-100 p-2 rounded-lg shadow-md">
                            <p>I need help with my account.</p>
                        </div>
                        <div className="self-start mb-2 bg-gray-200 p-2 rounded-lg shadow-md">
                            <p>Sure, </p>
                        </div>
                        <div className="self-end mb-2 bg-blue-100 p-2 rounded-lg shadow-md">
                            <p>I can't access my profile settings.</p>
                        </div>
                        <div className="self-start mb-2 bg-gray-200 p-2 rounded-lg shadow-md">
                            <p>Let me check that for you.</p>
                        </div>

                    </div>
                    <form className="p-2 border-t border-gray-200 flex">
                        <input
                            type="text"
                            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type a message..."
                        />
                        <button
                            //   type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
