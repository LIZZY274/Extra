import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ datos }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const labels = Object.keys(datos.datos[0]);
      const data = Object.values(datos.datos[0]);

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Datos',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)', 
          }],
        },
        options: {
          responsive: true, 
          maintainAspectRatio: false, 
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }


    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [datos]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <canvas ref={chartRef} style={{ width: '100%', height: '100%' }} /> 
    </div>
  );
};

export default LineChart;
