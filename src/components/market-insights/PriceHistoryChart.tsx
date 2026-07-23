"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { PriceHistoryRow } from "@/lib/price-history";

type TimeRange = "3m" | "6m" | "1y" | "all";

type PriceHistoryChartProps = {
  data: PriceHistoryRow[];
  grades: string[];
};

const gradeColors = [
  "#FE0000",
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#9333ea",
  "#0891b2",
  "#db2777",
  "#65a30d",
];

function parseDate(value: string): Date | null {
  const parts = value.trim().split("/");

  if (parts.length !== 3) {
    return null;
  }

  const day = Number(parts[0]);
  const month = Number(parts[1]);
  const year = Number(parts[2]);

  if (
    !Number.isFinite(day) ||
    !Number.isFinite(month) ||
    !Number.isFinite(year)
  ) {
    return null;
  }

  const date = new Date(year, month - 1, day);

  return Number.isNaN(date.getTime()) ? null : date;
}

function getRangeStart(
  latestDate: Date,
  range: TimeRange
): Date | null {
  if (range === "all") {
    return null;
  }

  const start = new Date(latestDate);

  if (range === "3m") {
    start.setMonth(start.getMonth() - 3);
  }

  if (range === "6m") {
    start.setMonth(start.getMonth() - 6);
  }

  if (range === "1y") {
    start.setFullYear(start.getFullYear() - 1);
  }

  return start;
}

export default function PriceHistoryChart({
  data,
  grades,
}: PriceHistoryChartProps) {
  const t = useTranslations("PriceHistoryPage");

  const [selectedGrades, setSelectedGrades] =
    useState<string[]>(grades);

  const [timeRange, setTimeRange] =
    useState<TimeRange>("all");

  const products = useMemo(
    () =>
      grades.map((grade, index) => ({
        key: grade,
        label: grade,
        color:
          gradeColors[index % gradeColors.length],
      })),
    [grades]
  );

  const ranges: Array<{
    key: TimeRange;
    label: string;
  }> = [
    {
      key: "3m",
      label: t("threeMonths"),
    },
    {
      key: "6m",
      label: t("sixMonths"),
    },
    {
      key: "1y",
      label: t("oneYear"),
    },
    {
      key: "all",
      label: t("all"),
    },
  ];

  const normalizedData = useMemo(() => {
    return data
      .map((row) => ({
        ...row,
        parsedDate: parseDate(row.date),
        displayDate: row.date,
      }))
      .filter(
        (row) => row.parsedDate !== null
      )
      .sort(
        (a, b) =>
          a.parsedDate!.getTime() -
          b.parsedDate!.getTime()
      );
  }, [data]);

  const latestDate =
    normalizedData.length > 0
      ? normalizedData[
          normalizedData.length - 1
        ].parsedDate
      : null;

  const chartData = useMemo(() => {
    if (
      !latestDate ||
      timeRange === "all"
    ) {
      return normalizedData;
    }

    const rangeStart = getRangeStart(
      latestDate,
      timeRange
    );

    if (!rangeStart) {
      return normalizedData;
    }

    return normalizedData.filter(
      (row) =>
        row.parsedDate &&
        row.parsedDate >= rangeStart
    );
  }, [
    normalizedData,
    latestDate,
    timeRange,
  ]);

  const latestDateLabel =
    normalizedData.length > 0
      ? normalizedData[
          normalizedData.length - 1
        ].displayDate
      : "—";

  const toggleGrade = (grade: string) => {
    setSelectedGrades((current) =>
      current.includes(grade)
        ? current.filter(
            (item) => item !== grade
          )
        : [...current, grade]
    );
  };

  const selectAll = () => {
    setSelectedGrades(grades);
  };

  const clearAll = () => {
    setSelectedGrades([]);
  };

  /*
   * Khi có nhiều điểm dữ liệu, chart sẽ rộng hơn trên
   * màn hình nhỏ và người dùng có thể kéo ngang.
   */
  const mobileChartWidth = Math.max(
    700,
    chartData.length * 85
  );

  return (
    <div className="rounded-3xl border border-border bg-surface p-4 sm:p-8">
      {/* FILTERS */}
      <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary sm:text-sm">
              {t("productType")}
            </p>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <button
                type="button"
                onClick={selectAll}
                className="font-semibold text-primary transition hover:text-primary-hover"
              >
                {t("selectAll")}
              </button>

              <span className="text-border">
                |
              </span>

              <button
                type="button"
                onClick={clearAll}
                className="font-semibold text-text-secondary transition hover:text-text"
              >
                {t("clearAll")}
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            {products.map((product) => {
              const active =
                selectedGrades.includes(
                  product.key
                );

              return (
                <button
                  key={product.key}
                  type="button"
                  onClick={() =>
                    toggleGrade(product.key)
                  }
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                    active
                      ? "border-transparent bg-text text-white"
                      : "border-border bg-background text-text-secondary hover:text-text"
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        product.color,
                    }}
                  />

                  {product.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* TIME RANGE */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary sm:text-sm">
            {t("timeRange")}
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            {ranges.map((range) => {
              const active =
                timeRange === range.key;

              return (
                <button
                  key={range.key}
                  type="button"
                  onClick={() =>
                    setTimeRange(range.key)
                  }
                  className={`rounded-xl border px-3 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                    active
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-background text-text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {range.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CHART */}
      <div className="-mx-4 mt-8 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:overflow-visible sm:px-0">
        <div
            className="h-[360px] min-w-full sm:h-[500px] sm:w-full sm:min-w-0"
            style={
            {
                "--mobile-chart-width": `${mobileChartWidth}px`,
            } as React.CSSProperties
            }
        >
    <div className="h-full w-[var(--mobile-chart-width)] sm:w-full">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart
              data={chartData}
              margin={{
                top: 30,
                right: 25,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                opacity={0.25}
              />

              <XAxis
                dataKey="displayDate"
                tick={{ fontSize: 11 }}
                tickMargin={12}
                minTickGap={28}
              />

              <YAxis
                tick={{ fontSize: 11 }}
                tickMargin={8}
                domain={["auto", "auto"]}
                width={55}
                tickFormatter={(value) =>
                  `$${Number(value).toFixed(2)}`
                }
              />

              <Tooltip
                formatter={(value, name) => [
                  value == null
                    ? "—"
                    : `$${Number(
                        value
                      ).toFixed(2)}/lb`,
                  name,
                ]}
                contentStyle={{
                  borderRadius: "14px",
                }}
              />

              {/* Legend chỉ hiện từ tablet trở lên */}
              <Legend
                wrapperStyle={{
                  fontSize: "12px",
                }}
              />

              {products.map((product) =>
                selectedGrades.includes(
                  product.key
                ) ? (
                  <Line
                    key={product.key}
                    type="monotone"
                    dataKey={product.key}
                    name={product.label}
                    stroke={product.color}
                    strokeWidth={2.5}
                    dot={{
                      r: 3,
                      fill: product.color,
                    }}
                    activeDot={{
                      r: 5,
                    }}
                    connectNulls
                  >
                    <LabelList
                      dataKey={product.key}
                      position="top"
                      offset={9}
                      formatter={(value) => {
                        if (value == null) {
                          return "";
                        }

                        const number =
                          Number(value);

                        return Number.isFinite(
                          number
                        )
                          ? number.toFixed(2)
                          : "";
                      }}
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        fill: product.color,
                      }}
                    />
                  </Line>
                ) : null
              )}
            </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-5 flex flex-col gap-2 border-t border-border pt-5 text-xs text-text-secondary sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <p>
          {t("unit")}:{" "}
          <span className="font-semibold text-text">
            USD/lb
          </span>
        </p>

        <p>
          {t("lastUpdated")}:{" "}
          <span className="font-semibold text-text">
            {latestDateLabel}
          </span>
        </p>
      </div>
    </div>
  );
}