import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const ReChart = () => {
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]
    return (
        <div>
            <LineChart data={data} >
                <Line dataKey ="uv" />
            </LineChart>
        </div>
    )
}

export default ReChart
