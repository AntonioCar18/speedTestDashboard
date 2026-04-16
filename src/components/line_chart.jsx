'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import React from 'react';

// Primamo 'data' kao prop (to je niz povijesti za tu konkretnu stranicu)
const DashboardLineChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data} margin={{ top: 10, left: 0, right: 10, bottom: 0 }}>
                <XAxis 
                    dataKey="timestamp" 
                    stroke='#ffffff'
                />
                <YAxis 
                    dataKey="latency" 
                    domain={['dataMin - 50', 'dataMax + 50']} 
                    stroke='#ffffff'
                />

                <Line
                    type="monotone"
                    dataKey="latency" // Ključ iz tvog JSON-a
                    stroke='#ffffff'  // Zelena boja kao na dizajnu
                    strokeWidth={2}
                    dot={false}
                    animationDuration={1000}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default DashboardLineChart;