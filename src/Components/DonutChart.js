import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
    const data = {
        labels: ['Data 1', 'Data 2'],
        datasets: [
            {
                label: '# of Votes',
                data: [ 15, 4],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(175, 92, 192, 1)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(175, 92, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="container-donut">
             <Doughnut data={data} />
            </div>
       
    )
}
export default DonutChart;
