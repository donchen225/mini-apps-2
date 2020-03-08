import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarGraph = ({data}) => {
  const labels = Object.keys(data);
  const dataSets = Object.values(data);

  const state = {
    labels: labels,
    datasets: [
        {
        label: 'Prices',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: dataSets
        }
    ]
    }
  return (
    <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:`Time Series Bar Chart for Bitcoin prices from ${labels[0]} to ${labels[labels.length-1]}`,
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

export default BarGraph;