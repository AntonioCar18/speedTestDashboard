'use client';

import { LineChart, Line, XAxis, YAxis } from 'recharts';

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
        ping1: 62,
    },
]

const DashboardLineChart = () => {
    return (
        <LineChart width={300} height={150} data={pingData} margin={{top: 30, left: -30}}>
            <XAxis
             dataKey="time"
            />
            <YAxis>
                axisLine={true}
            </YAxis>
            <Line
              type="monotone"
              dataKey="ping1"
              stroke='#ffffff'
            />
        </LineChart>
    )
}

export default DashboardLineChart