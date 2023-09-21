import React from 'react';
import './App.css';
import LineChart from './Components/LineChart';
import DonutChart from './Components/DonutChart';
import BarChart from './Components/BarChart';
import StackedBarChart from './Components/StackedBarChart';

function App() {

  return (
    <div className="App">
      <h2>Financial Management</h2>
      <div className="content-1">
        <div className="box1">
          <div className="box-value">
            <div className="text">
              <p>Total accounts Receivable</p>
              <p className="text1">
                $6,621,280</p>
            </div>
            <div className="text">
              <p>Total accounts Payable</p>
              <p className="text1">
                $1,630,270 </p>
            </div>
            <div className="text">
              <p>Equity Ratio</p>
              <p className="text1">
                75.38 %</p>
            </div>
            <div className="text">
              <p>Debt Equity</p>
              <p className="text1">
                1.10 %</p>
            </div>
          </div>
          <div className="box-donut">
            <DonutChart />
            <DonutChart />
            <DonutChart />
            <DonutChart />
          </div>
        </div>
        <div className="box2">
          <BarChart />
        </div>
      </div>
      <div className="content-2">
        <LineChart />
        <StackedBarChart />
      </div>
    </div>
  );
}

export default App;
