import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import {nFormatter} from './tools';

export default function ElBarChart({ system }) {

  function getFlows(re, outorgas) {
    let sum = 0;

    outorgas.map((data) => {
      if (typeof data.demandas.volume.vol_a_ma === 'undefined') {
        return sum += 0;
      } else {
        return sum += parseFloat(data.demandas.volume.vol_a_ma);
      }
    });
    return [re, sum];
  }

  function getPercentFlows(re, outorgas) {
    let sum = 0;
    outorgas.map((data) => {
      console.log(data.demandas.volume.vol_a_ma === 'undefined', data.demandas.volume.vol_a_ma)
      if (typeof data.demandas.volume.vol_a_ma === 'undefined') {
        return sum += 0;
      } else {
        return sum += parseFloat(data.demandas.volume.vol_a_ma);
      }
    });
    let perRe = ((re * 100) / re).toFixed(0);
    let perOut = ((sum * 100) / re).toFixed(2);
    console.log([perRe, perOut])
    return [perRe, perOut];
  }

  const [_system, _setSystem] = useState(system);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZer: 0,
        position: 'left', 
        ticks:{
          callback: function(value, index, values){
            return nFormatter(value,1)

          }
        }
      },
      percentage: {
        beginAtZer: 0,
        position: 'right',
        grid: {
          drawOnChartArea: false
        },
        ticks:{
          callback: function(value, index, values){
            return `${value}%`

          }
        }
      }
    },
    plugins: {

      title: {
        display: true,
        text: 'Disponibilidade',
      }
    },
  };

  useEffect(() => {

  })

  const data = {
    labels: ['Subsistema', 'Outorgados'],
    datasets:
      [
        {
          label: '',

          data: getFlows(system.hg_info.re_cm_ano, system.outorgas),
          type: 'line',
          backgroundColor: 'aqua',
          borderColor: 'black',
          borderWidth: 1,

        },
        {
          label: 'Vazão',
          id: "A",
          backgroundColor: 'green',
          data: getFlows(system.hg_info.re_cm_ano, system.outorgas),
        }, {
          label: 'Porcentagem',
          yAxisID: 'percentage',
          backgroundColor: 'red',
          data: getPercentFlows(system.hg_info.re_cm_ano, system.outorgas),
        }
      ]
  };

    console.log(nFormatter(16000000000,1))

  return <Bar options={options} data={data} />;
}
