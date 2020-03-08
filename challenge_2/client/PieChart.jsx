import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const PieChart = ({data}) => {
  const labels = Object.keys(data);
  const dataSets = Object.values(data);

  const state = {
    labels: labels,
    datasets: [
      {
        label: 'Price',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: dataSets
      }
    ]
  }

  return (
    <div>
    <Pie
        data={state}
        options={{
        title:{
            display:true,
            text:`Time Series Pie Chart for Bitcoin prices from ${labels[0]} to ${labels[labels.length-1]}`,
            fontSize:20
        },
        legend:{
            display:true,
            position:'right'
        }
        }}
    />

    <Doughnut
        data={state}
        options={{
        title:{
            display:true,
            text:'Price',
            fontSize:20
        },
        legend:{
            display:true,
            position:'right'
        }
        }}
    />
    </div>
  );
};

export default PieChart;