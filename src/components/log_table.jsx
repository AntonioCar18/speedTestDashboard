import React from 'react';

// Primamo 'data' kao prop koji Dashboard šalje
const LogTable = ({ data }) => {
    
    // Provjera ako podaci još nisu stigli
    if (!data || data.length === 0) {
        return (
            <div className="bg-gray-800 text-white p-8 rounded-xl text-center">
                <p className="animate-pulse text-gray-400">Loading logs...</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 text-white p-8 rounded-xl overflow-hidden mb-8 shadow-2xl border border-gray-700">
            <div>
                <h2 className="text-2xl font-bold mb-4">
                    Recent Logs
                </h2>
            </div>
            
            <div className="border-b border-gray-700 mb-6"></div>

            <table className="w-full text-left border-separate border-spacing-y-2">
                <thead>
                    <tr className="text-gray-400 text-sm uppercase tracking-wider">
                        <th className="px-2 pb-2">Timestamp</th>
                        <th className="px-2 pb-2">Website</th>
                        <th className="px-2 pb-2">Status</th>
                        <th className="px-2 pb-2 text-right">Latency</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0,12).map((entry, index) => (
                        <tr key={index} className="bg-gray-900/40 hover:bg-gray-700/50 transition-colors group">
                            <td className="py-4 px-2 text-sm text-gray-400 font-mono">
                                {entry.timestamp}
                            </td>
                            <td className="py-4 px-2 font-medium">
                                {entry.website.replace('https://', '')}
                            </td>
                            <td className="py-4 px-2">
                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${
                                    entry.status === "UP" 
                                    ? "bg-green-500/10 text-green-400 border-green-500/20" 
                                    : "bg-red-500/10 text-red-400 border-red-500/20"
                                }`}>
                                    {entry.status}
                                </span>
                            </td>
                            <td className="py-4 px-2 text-right font-mono text-blue-400">
                                {entry.latency} <span className="text-[10px] text-gray-500">ms</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LogTable;