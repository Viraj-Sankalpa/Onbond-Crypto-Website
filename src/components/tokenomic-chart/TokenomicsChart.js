import { Chart } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';
import '../../assets/scss/blocks/TokenomicsChart.scss';

const data = {
  labels: ['Team Allocation', 'Reserve Fund', 'Community Incentives', 'Ecosystem Development'],
  datasets: [
    {
      data: [40, 30, 20, 10],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 1,
      borderColor: '#fff',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom', // Position the legend at the bottom
      
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (tooltipItem) {
          const dataIndex = tooltipItem.dataIndex;
          const value = data.datasets[0].data[dataIndex];
          return `${data.labels[dataIndex]}: ${value}%`;
        },
      },
    },
    datalabels: {
      display: true,
      color: '#fff',
      formatter: (value) => `${value}%`,
    },
  },
  animation: {
    animateRotate: true,
    animateScale: true,
  },
  onHover: (event, chartElement) => {
    event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
  },
};

const TokenomicsChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const initializeChart = () => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data,
      options,
      plugins: [{
        beforeDraw: function (chart) {
          if (chart.config.data.datasets[0].hoverOffset === undefined) {
            chart.config.data.datasets[0].hoverOffset = 20;
          }
        }
      }]
    });
  };

  useEffect(() => {
    initializeChart();

    const canvas = chartRef.current;
    const handleMouseEnter = () => {
      initializeChart();
    };

    canvas.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      canvas.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div className="tokenomics-chart">
      <canvas ref={chartRef} />
    </div>
  );
};

export default TokenomicsChart;
