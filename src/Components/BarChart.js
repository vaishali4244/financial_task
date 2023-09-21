import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Total accounts receivable and payable aging',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May'];

const BarChart = () => {
    const data = {
        labels,
        datasets: [
            {
                label: 'Accounts Receivable',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
                backgroundColor: 'rgba(255, 99, 32, 0.5)',
            },
            {
                label: 'Accounts Payable',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
                backgroundColor: 'rgba(53, 62, 235, 0.5)',
            },
        ],
    };

    return (
        <Bar options={options} data={data} />
   
    )
}
export default BarChart;
