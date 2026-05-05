import { Pie, PieChart } from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
    { type: "A", visitors: 275, fill: "var(--color-red-700)" },
    { type: "B", visitors: 200, fill: "var(--color-green-700)" },
    { type: "C", visitors: 187, fill: "var(--color-blue-700)" },
    { type: "D", visitors: 173, fill: "var(--color-yellow-300)" },
]

const chartConfig = {
    type: {
        label: "Type",
    },
    chrome: {
        label: "A",
        color: "var(--color-red-700)",
    },
    safari: {
        label: "B",
        color: "var(--color-green-700)",
    },
    firefox: {
        label: "C",
        color: "var(--color-blue-700)",
    },
    edge: {
        label: "D",
        color: "var(--color-yellow-300)",
    },

} satisfies ChartConfig

export function DonutChart() {
    return (
        <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[200px]"
        >
            <PieChart>
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="type"
                    innerRadius={46}
                    outerRadius={55}
                    labelLine={false}
                    label={({ payload, ...props }) => {
                        return (
                            <text
                                cx={props.cx}
                                cy={props.cy}
                                x={props.x}
                                y={props.y}
                                textAnchor={props.textAnchor}
                                dominantBaseline={props.dominantBaseline}
                                fill="var(--foreground)"
                            >
                                {payload.visitors}
                            </text>
                        )
                    }}
                />
            </PieChart>
        </ChartContainer>
    )
}