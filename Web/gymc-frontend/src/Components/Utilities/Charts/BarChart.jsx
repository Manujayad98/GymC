import React from "react";
import { Chart } from "react-google-charts";

// export const data = [
//     ["Year", "Sales", "Expenses", "Profit"],
//     ["2014", 1000, 400, 200],
//     ["2015", 1170, 460, 250],
//     ["2016", 660, 1120, 300],
//     ["2017", 1030, 540, 350],
// ];
export const data = [
    ["Year", "Sales"],
    ["2014", 1000],
    ["2015", 1170],
    ["2016", 660],
    ["2017", 1030],
];

export const options = {
    chart: {
        title: "Company Performance",
        subtitle: "Sales, Expenses, and Profit: 2014-2017",
        colors: ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
        chartArea: { width: 350, height: 350 },
        legend: {
            alignment: "center",
        },
    },
};


const PieChart = () => {
    return (
        <Chart
            chartType="Bar"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    )
}
export default PieChart
