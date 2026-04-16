import DashboardLineChart from "./line_chart";

// Dodajemo 'history' u listu props-a (destrukturiranje)
const DashboardPCard = ({ title, web_address, status, latency_time, last_checked, uptime, history }) => {

    const statusColor = status === "UP" ? "bg-green-500" : status === "DOWN" ? "bg-red-500" : "bg-yellow-500";
    const textColor = status === "UP" ? "text-green-500" : status === "DOWN" ? "text-red-500" : "text-yellow-500";
    const latencyColor = latency_time !== undefined ? (latency_time < 100 ? "text-green-500" : latency_time < 300 ? "text-yellow-500" : "text-red-500") : "text-gray-300";

    return (
        <div className="bg-gray-800 p-8 rounded-xl shadow w-full flex flex-col hover:scale-[1.02] transition-transform duration-300">
            <h1 className="text-2xl text-white font-bold truncate">
                 {title}
            </h1>
            <p className="text-[14px] text-gray-400 truncate">
                {web_address}
            </p>
            
            <div className="flex flex-row items-center gap-2 mt-4 justify-between">
                <div className="flex items-center gap-2">
                    <span className={`inline-block w-2 h-2 rounded-full ${statusColor} animate-pulse`}></span>
                    <p className={`font-bold ${textColor}`}>
                        {status}
                    </p>
                </div>
                <div>
                    <p className={`font-bold ${latencyColor}`}>
                        {latency_time !== undefined ? `${latency_time} ms` : null}
                    </p>
                </div>
            </div>

            <div className="h-37.5 w-full mt-4">
                <DashboardLineChart data={history} />
            </div>

            <div className="border-t border-gray-700 mt-4"></div>

            <div className="flex flex-row justify-between items-center mt-4">
                <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[14px]">
                        {last_checked}
                    </p>
                </div>
                <p className="text-gray-400 text-[14px] font-medium">
                    Uptime: <span className="text-white">{uptime !== undefined ? `${uptime}%` : "N/A"}</span>
                </p>
            </div>
        </div>
    )
}

export default DashboardPCard;