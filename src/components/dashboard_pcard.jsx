const DashboardPCard = ({ title, web_address, status, latency_time, last_checked, uptime }) => {

    const statusColor = status === "Up" ? "bg-green-500" : status === "Down" ? "bg-red-500" : "bg-yellow-500";
    const textColor = status === "Up" ? "text-green-500" : status === "Down" ? "text-red-500" : "text-yellow-500";
    const latencyColor = latency_time !== undefined ? (latency_time < 100 ? "text-green-500" : latency_time < 300 ? "text-yellow-500" : "text-red-500") : "text-gray-300";

    return (
        <div className="bg-gray-800 p-8 rounded shadow w-full align-items flex flex-col">
            <h1 className="text-2xl text-white font-bold">
                 {title}
            </h1>
            <p className="text-[14px] text-gray-200">
                {web_address}
            </p>
            <div className="flex flex-row items-center gap-2 mt-4 justify-between">
                <div className="flex items-center gap-2"><span className={`inline-block w-2 h-2 rounded-full ${statusColor}`}>
                </span>
                <p className={`font-bold ${textColor}`}>
                    {status}
                </p>
            </div>
            <div>
                <p className={`ml-4 font-bold ${latencyColor}`}>
                    {latency_time !== undefined ? `${latency_time} ms` : null}
                </p>
            </div>
            </div>
            <div className="border border-white mt-4 ">
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-300 text-[14px]">
                        {last_checked}
                    </p>
                </div>
                <p className="text-gray-300 text-[14px]">
                    Uptime: {uptime !== undefined ? `${uptime}%` : "N/A"}
                </p>
            </div>
        </div>
    )
}

export default DashboardPCard;