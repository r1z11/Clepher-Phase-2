import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

import Header from '../../components/Header';
import { bots } from '../../constants/Data';
import BotCard from '../../components/BotCard';

function Home() {

    return (
        <div className="flex flex-col w-full h-full bg-blue-50">
            <Header />

            <div className="flex justify-start pl-9 pt-9">
                <button className="flex flex-row p-4 text-sm rounded-lg text-white bg-blue-600 hover:bg-blue-700">
                    <FaPlus size={19} color="#FFF" style={{marginRight: 10}} /> Create a bot</button>
            </div>

            <div className="grid grid-cols-3 p-6">
                {bots.map((bot) => (
                    <BotCard
                        key={bot?.id}
                        avatar={bot?.avatar}
                        companyName={bot?.company_name}
                        category={bot?.category}
                        subscribers={bot?.total_subscribers}
                        activeSubscribers={bot?.active_subscribers}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
