import React, { useState } from 'react';
import Chart from "react-apexcharts";

const Statistics = (datas) => {
    const store = datas.data.data
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [store[0].name, store[1].name, store[2].name, store[3].name]
            }
        },
        series: [
            {
                name: "Quiz",
                data: [store[0].total, store[1].total, store[2].total, store[3].total]
            }
        ]
    })
    console.log(setState);
    return (
        <div className='md:w-5/12 w-12/12 mt-24 md:mx-auto'>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
            />
            <p className='md:text-2xl text-3xl text-center'>Total Quiz</p>
        </div>
    );
};

export default Statistics;