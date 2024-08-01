"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { date: "2024-04-01", sensex: 222, eldex: 150 },
  { date: "2024-04-02", sensex: 97, eldex: 180 },
  { date: "2024-04-03", sensex: 167, eldex: 120 },
  { date: "2024-04-04", sensex: 242, eldex: 260 },
  { date: "2024-04-05", sensex: 373, eldex: 290 },
  { date: "2024-04-06", sensex: 301, eldex: 340 },
  { date: "2024-04-07", sensex: 245, eldex: 180 },
  { date: "2024-04-08", sensex: 409, eldex: 320 },
  { date: "2024-04-09", sensex: 59, eldex: 110 },
  { date: "2024-04-10", sensex: 261, eldex: 190 },
  { date: "2024-04-11", sensex: 327, eldex: 350 },
  { date: "2024-04-12", sensex: 292, eldex: 210 },
  { date: "2024-04-13", sensex: 342, eldex: 380 },
  { date: "2024-04-14", sensex: 137, eldex: 220 },
  { date: "2024-04-15", sensex: 120, eldex: 170 },
  { date: "2024-04-16", sensex: 138, eldex: 190 },
  { date: "2024-04-17", sensex: 446, eldex: 360 },
  { date: "2024-04-18", sensex: 364, eldex: 410 },
  { date: "2024-04-19", sensex: 243, eldex: 180 },
  { date: "2024-04-20", sensex: 89, eldex: 150 },
  { date: "2024-04-21", sensex: 137, eldex: 200 },
  { date: "2024-04-22", sensex: 224, eldex: 170 },
  { date: "2024-04-23", sensex: 138, eldex: 230 },
  { date: "2024-04-24", sensex: 387, eldex: 290 },
  { date: "2024-04-25", sensex: 215, eldex: 250 },
  { date: "2024-04-26", sensex: 75, eldex: 130 },
  { date: "2024-04-27", sensex: 383, eldex: 420 },
  { date: "2024-04-28", sensex: 122, eldex: 180 },
  { date: "2024-04-29", sensex: 315, eldex: 240 },
  { date: "2024-04-30", sensex: 454, eldex: 380 },
  { date: "2024-05-01", sensex: 165, eldex: 220 },
  { date: "2024-05-02", sensex: 293, eldex: 310 },
  { date: "2024-05-03", sensex: 247, eldex: 190 },
  { date: "2024-05-04", sensex: 385, eldex: 420 },
  { date: "2024-05-05", sensex: 481, eldex: 390 },
  { date: "2024-05-06", sensex: 498, eldex: 520 },
  { date: "2024-05-07", sensex: 388, eldex: 300 },
  { date: "2024-05-08", sensex: 149, eldex: 210 },
  { date: "2024-05-09", sensex: 227, eldex: 180 },
  { date: "2024-05-10", sensex: 293, eldex: 330 },
  { date: "2024-05-11", sensex: 335, eldex: 270 },
  { date: "2024-05-12", sensex: 197, eldex: 240 },
  { date: "2024-05-13", sensex: 197, eldex: 160 },
  { date: "2024-05-14", sensex: 448, eldex: 490 },
  { date: "2024-05-15", sensex: 473, eldex: 380 },
  { date: "2024-05-16", sensex: 338, eldex: 400 },
  { date: "2024-05-17", sensex: 499, eldex: 420 },
  { date: "2024-05-18", sensex: 315, eldex: 350 },
  { date: "2024-05-19", sensex: 235, eldex: 180 },
  { date: "2024-05-20", sensex: 177, eldex: 230 },
  { date: "2024-05-21", sensex: 82, eldex: 140 },
  { date: "2024-05-22", sensex: 81, eldex: 120 },
  { date: "2024-05-23", sensex: 252, eldex: 290 },
  { date: "2024-05-24", sensex: 294, eldex: 220 },
  { date: "2024-05-25", sensex: 201, eldex: 250 },
  { date: "2024-05-26", sensex: 213, eldex: 170 },
  { date: "2024-05-27", sensex: 420, eldex: 460 },
  { date: "2024-05-28", sensex: 233, eldex: 190 },
  { date: "2024-05-29", sensex: 78, eldex: 130 },
  { date: "2024-05-30", sensex: 340, eldex: 280 },
  { date: "2024-05-31", sensex: 178, eldex: 230 },
  { date: "2024-06-01", sensex: 178, eldex: 200 },
  { date: "2024-06-02", sensex: 470, eldex: 410 },
  { date: "2024-06-03", sensex: 103, eldex: 160 },
  { date: "2024-06-04", sensex: 439, eldex: 380 },
  { date: "2024-06-05", sensex: 88, eldex: 140 },
  { date: "2024-06-06", sensex: 294, eldex: 250 },
  { date: "2024-06-07", sensex: 323, eldex: 370 },
  { date: "2024-06-08", sensex: 385, eldex: 320 },
  { date: "2024-06-09", sensex: 438, eldex: 480 },
  { date: "2024-06-10", sensex: 155, eldex: 200 },
  { date: "2024-06-11", sensex: 92, eldex: 150 },
  { date: "2024-06-12", sensex: 492, eldex: 420 },
  { date: "2024-06-13", sensex: 81, eldex: 130 },
  { date: "2024-06-14", sensex: 426, eldex: 380 },
  { date: "2024-06-15", sensex: 307, eldex: 350 },
  { date: "2024-06-16", sensex: 371, eldex: 310 },
  { date: "2024-06-17", sensex: 475, eldex: 520 },
  { date: "2024-06-18", sensex: 107, eldex: 170 },
  { date: "2024-06-19", sensex: 341, eldex: 290 },
  { date: "2024-06-20", sensex: 408, eldex: 450 },
  { date: "2024-06-21", sensex: 169, eldex: 210 },
  { date: "2024-06-22", sensex: 317, eldex: 270 },
  { date: "2024-06-23", sensex: 480, eldex: 530 },
  { date: "2024-06-24", sensex: 132, eldex: 180 },
  { date: "2024-06-25", sensex: 141, eldex: 190 },
  { date: "2024-06-26", sensex: 434, eldex: 380 },
  { date: "2024-06-27", sensex: 448, eldex: 490 },
  { date: "2024-06-28", sensex: 149, eldex: 200 },
  { date: "2024-06-29", sensex: 103, eldex: 160 },
  { date: "2024-06-30", sensex: 446, eldex: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  sensex: {
    label: "SenSex",
    color: "#ca628c",
  },
  eldex: {
    label: "Eldex",
    color: "#4535C1",
  },
} satisfies ChartConfig

export function Component() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("sensex")

  const total = React.useMemo(
    () => ({
      sensex: chartData.reduce((acc, curr) => acc + curr.sensex, 0),
      eldex: chartData.reduce((acc, curr) => acc + curr.eldex, 0),
    }),
    []
  )

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6 text-black dark:text-white">
          <CardTitle>Market Valuation</CardTitle>
          <CardDescription>
            Showing the live market status
          </CardDescription>
        </div>
        <div className="flex flex-col">
          {["sensex", "eldex"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-col justify-center gap-1 px-6 py-4 text-left data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 text-black dark:text-white"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
