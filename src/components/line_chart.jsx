'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const pingData = [
    {
       time: 1,
       ping1: 50, 
    },
    {
        time: 2,
        ping1: 35,
    },
    {
        time: 3,
        ping1: 42,
    },
    {
        time: 4,
        ping1: 55,
    },
    {
        time: 5,
        ping1: 30,
    },
]

const DashboardLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height={150}>
        <LineChart data={pingData} margin={{top: 20, left: -32}}>
            <XAxis
             dataKey="time"
             stroke="#ffffff"
             axisLine={true}
            />
            <YAxis
                stroke="#ffffff"
                axisLine={true}
                dataKey="ping1"
            />
            <Line
              type="monotone"
              dataKey="ping1"
              stroke='#ffffff'
              dot={false}
            />
        </LineChart>
        </ResponsiveContainer>
    )
}

export default DashboardLineChart