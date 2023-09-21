import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const StackedBarChart = () => {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Profit and Loss Summary',
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min:0, max: 2000 })),
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: 'Dataset 3',
                data: labels.map(() => faker.datatype.number({ min:0, max: 2000 })),
                backgroundColor: 'rgb(235,205,15)',
            },
        ],
    };

    return (
        <div className="container-bar2">
        <Bar options={options} data={data} />
        </div>
    )
}

export default StackedBarChart;
