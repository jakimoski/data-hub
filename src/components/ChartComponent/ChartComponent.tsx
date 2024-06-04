import { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import MainButton from "../MainButton/MainButton";
import bellIcon from "../../assets/icons/btn-bell-white.svg";

const ChartComponent = () => {
  const [data] = useState([
    {
      month: "Јануари",
      цена: 4000,
    },
    {
      month: "Февруари ",
      цена: 3000,
    },
    {
      month: "Март ",
      цена: 2000,
    },
    {
      month: "Април ",
      цена: 2780,
    },
    {
      month: "Мај ",
      цена: 1890,
    },
    {
      month: "Јуни ",
      цена: 2390,
    },
    {
      month: "Јули ",
      цена: 3490,
    },
    {
      month: "Август",
      цена: 2900,
    },
    {
      month: "Септември",
      цена: 2600,
    },
    {
      month: "Октомври",
      цена: 3000,
    },
    {
      month: "Ноември",
      цена: 3200,
    },
    {
      month: "Декември",
      цена: 2800,
    },
  ]);

  const handlePreviousMonth = () => {
    // Logic to update data for previous month
  };

  const handleThreeMonths = () => {
    // Logic to update data for three months
  };

  const handleLastYear = () => {
    // Logic to update data for last year
  };

  return (
    <div className="chart">
      <div className="chart__header">
        <div>
          <h2>Историја на цени</h2>
          <p>Преглед на цените на продуктот и нивно варирање</p>
        </div>
        <MainButton rightLogo={bellIcon} variant="btn--black">
          Изветување за цена
        </MainButton>
      </div>
      <ResponsiveContainer width={"100%"} height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="chart-linear"
              x1="680.5"
              y1="1"
              x2="680.5"
              y2="456.733"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA500" stopOpacity="1" />
              <stop offset="0.455" stopColor="#FFA500" stopOpacity="1" />
              <stop offset="0.755" stopColor="#FFA500" stopOpacity="0.1" />
              <stop offset="0.855" stopColor="#FFA500" stopOpacity="0" />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} strokeDasharray="1 0" stroke="#000" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            className="chart-area"
            type="monotone"
            dataKey="цена"
            stroke="#000"
            fill="url(#chart-linear)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="cart__actions">
        <button className="chart__btn" onClick={handlePreviousMonth}>
          1 м.
        </button>
        <button className="chart__btn" onClick={handleThreeMonths}>
          3 м.
        </button>
        <button className="chart__btn" onClick={handleLastYear}>
          1 г.
        </button>
      </div>
    </div>
  );
};

export default ChartComponent;
