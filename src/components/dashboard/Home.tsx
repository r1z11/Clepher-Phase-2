import { Link } from "react-router-dom";
import { Bot } from "../../types";

function Home(bot: Bot) {

    return (
        <div className="flex flex-col p-6 w-full h-full">
            <div className="flex flex-row rounded-xl bg-white p-6 items-center justify-between">
                <div className="flex flex-row items-center mr-6">
                    <img src={bot?.avatar} width={75} height={75} className="rounded-full" />

                    <div className="flex flex-col ml-6 p-3 justify-start flex-wrap">
                        <p className="text-gray-500 text-lg font-bold text-left">{bot?.companyName}</p>
                        <Link className="text-blue-500 mt-3 text-left text-wrap" to={bot?.url ? bot.url : "#"} target="_blank">Website</Link>
                        <p className="text-gray-500 mt-3 text-left">{bot?.description}</p>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col rounded-xl px-14 py-4 bg-blue-50 items-center justify-center">
                        <p className="text-gray-500 text-3xl font-bold">{bot?.totalSubscribers && (bot.totalSubscribers / 1000)}K</p>
                        <p className="text-gray-400 mt-1">Subscribers</p>
                    </div>

                    <div className="flex flex-col rounded-xl px-14 py-4 ml-6 bg-blue-50 items-center justify-center">
                        <p className="text-gray-500 text-3xl font-bold">{bot?.activeSubscribers && (bot.activeSubscribers / 1000)}K</p>
                        <p className="text-gray-400 mt-1">Active Subscribers</p>
                    </div>

                    <div className="flex flex-col rounded-xl px-14 py-4 ml-6 bg-blue-50 items-center justify-center">
                        <p className="text-gray-500 text-3xl font-bold">{bot?.unsubscribed && (bot.unsubscribed / 1000)}K</p>
                        <p className="text-gray-400 mt-1">Unsubscribed</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-6 bg-white p-6 rounded-xl">
                <p className="text-lg font-bold">Subscriber Statistics</p>
                <p className="text-gray-700 mt-3">Analytics here</p>
            </div>

            <div className="flex flex-row mt-6">

                <div className="flex flex-col bg-white p-6 rounded-xl w-1/3">
                    <div className="flex flex-row justify-between">
                        <p className="text-lg font-bold">Latest Subscribers</p>
                        <button className="text-xs text-white bg-blue-500 px-2 rounded-lg">Goto Audience</button>
                    </div>

                    <div className="flex flex-row justify-between items-center mt-4">
                        <img src={bot?.avatar} width={50} height={50} className="rounded-full" />
                        <p className="text-gray-700 text-sm">Lawrence Onah</p>
                        <p className="text-gray-700 text-sm">Male</p>
                        <p className="text-xs text-gray-700">1 month ago</p>
                    </div>
                </div>

                <div className="flex flex-col bg-white p-6 rounded-xl w-1/3 ml-6">
                    <div className="flex flex-row justify-between">
                        <p className="text-lg font-bold">Latest Chats</p>
                        <button className="text-xs text-white bg-blue-500 px-2 rounded-lg">Goto Live Chat</button>
                    </div>

                    <div className="flex flex-row justify-between items-center mt-4">
                        <img src={bot?.avatar} width={50} height={50} className="rounded-full" />
                        <p className="text-gray-700 text-sm">Lawrence Onah</p>
                        <p className="text-gray-700 text-sm">Male</p>
                        <p className="text-xs text-gray-700">1 month ago</p>
                    </div>
                </div>

                <div className="flex flex-col bg-white p-6 rounded-xl w-1/3 ml-6">
                    <div className="flex flex-row justify-between">
                        <p className="text-lg font-bold">Latest Broadcasts</p>
                        <button className="text-xs text-white bg-blue-500 px-2 rounded-lg">Goto Broadcasts</button>
                    </div>

                    <p className="text-gray-700 mt-4 text-lg">Latest broadcasts here</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
