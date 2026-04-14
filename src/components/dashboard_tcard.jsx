const DashboardTCard = ({ icon, title, count }) => {
    return (
        <div className="bg-gray-800 p-8 rounded shadow w-full flex gap-4 items-center justify-between">
                    <h1 className="text-2xl font-bold text-white">
                        {icon} {title}
                    </h1>
                    <p className="text-3xl font-bold text-white">
                        {count}
                    </p>
        </div>
    )
}

export default DashboardTCard;