import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { subDays } from "date-fns";
import Dataforchartgenerator from './dataforgraphgenerator';


export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={Dataforchartgenerator()}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.6} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="OccupiedNumberOfPallets" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          datakey="OccupiedNumberOfPallets"
          axisLine={false}
          tickLine={false}
          tickCount={8}
        />

        <Tooltip />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}