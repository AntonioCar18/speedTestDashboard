const pingData = [
    {
       id: 1,
       website: "www.example.com",
       status: "Up",
       ping1: 50, 
    },
    {
        id: 2,
        website: "www.anotherexample.com",
        status: "Down",
        ping1: 35,
    },
    {
        id: 3,
        website: "www.yetanotherexample.com",
        status: "Up",
        ping1: 42,
    },
    {
        id: 4,
        website: "www.one_more_example.com",
        status: "Down",
        ping1: 55,
    },
    {
        id: 5,
        website: "www.fifth_example.com",
        status: "Up",
        ping1: 30,
    },
]

const LogTable = () => {
    return (
        <div className="bg-gray-800 text-white p-8 rounded-xl overflow-hidden mb-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">
                    Recent Logs
                </h2>
            </div>
            <div className="border border-white mb-4">
            </div>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Website</th>
                        <th>Status</th>
                        <th>Latency (ms)</th>
                    </tr>
                </thead>
                <tbody>
                    {pingData.map((entry) => (
                        <tr key={entry.id}>
                            <td>{new Date().toLocaleString()}</td>
                            <td>{entry.website}</td>
                            <td>{entry.status}</td>
                            <td>{entry.ping1}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LogTable