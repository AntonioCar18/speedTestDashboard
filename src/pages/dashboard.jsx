import DashboardTCard from '../components/dashboard_tcard'
import DashboardPCard from '../components/dashboard_pcard'
import LogTable from '../components/log_table'

let br_web = 0

const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <div className='flex flex-row justify-between items-center w-full h-16 mt-8 mb-4'>
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-black ml-16">
                Monitoring dashboard
            </h1>
            <p className='hidden lg:block ml-16'>{br_web} web sites monitored at the moment</p>
                </div>
                <div>
                    <button className="cursor-pointer bg-gray-800 text-white font-bold py-2 px-8 rounded mr-16 hover:bg-gray-700">
                        Sync
                    </button>
                </div>
            </div>
            <div className="w-full h-full px-16 mt-4 flex flex-col lg:flex-row gap-8">
                <DashboardTCard icon={<span>✅</span>} title="Sites UP" count={0} />
                <DashboardTCard icon={<span>❌</span>} title="Sites DOWN" count={0} />
                <DashboardTCard icon={<span>⚠️</span>} title="SSL Expiring" count={0} />
                <DashboardTCard icon={<span>⏱️</span>} title="Avg. latency (ms)" count={0} />
            </div>
            <div className='relative px-16 mt-8 mb-4'>
                <input className='border-2 border-gray-800 rounded-2xl p-3 sm:w-4/4 lg:w-1/4' placeholder='Search...' type="text" />
            </div>
            <div className="w-full h-full px-16 mt-4 lg:grid grid-cols-4 gap-8">
                <DashboardPCard title="Example Site" web_address="www.example.com" status="Up" latency_time={50} last_checked="4h ago" uptime={99.9} />
            </div>
            <div className='w-full h-full px-16 mt-12'>
                <LogTable />
            </div>
            </div>
    )
}

export default Dashboard