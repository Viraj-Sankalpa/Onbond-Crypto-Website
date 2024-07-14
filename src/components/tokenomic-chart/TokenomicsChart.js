import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer';
import '../../assets/scss/blocks/TokenomicsChart.scss';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
  labels: [
    'Team Allocation',
    'Reserve Fund',
    'Community Allocation',
    'Ecosystem Development',
  ],
  datasets: [
    {
      label: 'Token Allocation',
      data: [20, 15, 5, 10],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(113, 182, 255, 0.6)',
      ],
      hoverBackgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(113, 182, 255, 0.8)',
      ],
      borderWidth: 1,
      borderColor: '#fff',
      hoverBorderColor: '#fff',
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
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
      formatter: (value) => {
        return `${value}%`;
      },
      anchor: 'end',
      align: 'start',
      offset: -10,
    },
  },
  animation: {
    animateRotate: true,
    animateScale: true,
  },
  responsive: true,
  maintainAspectRatio: false,
  onHover: (event, chartElement) => {
    event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
  },
};

const TokenomicsChart = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleHover = (event, elements) => {
    if (elements.length > 0) {
      setHoverIndex(elements[0].index);
    } else {
      setHoverIndex(null);
    }
  };

  const plugins = [
    {
      beforeDraw: (chart) => {
        if (hoverIndex !== null) {
          const meta = chart.getDatasetMeta(0);
          const arc = meta.data[hoverIndex];
          const ctx = chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0,0,0,0.5)';
          ctx.shadowBlur = 20;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 10;
        }
      },
      afterDraw: (chart) => {
        if (hoverIndex !== null) {
          const ctx = chart.ctx;
          ctx.restore();
        }
      },
    },
  ];

  return (
    <div className={`tokenomics-chart-container ${inView ? 'animate' : ''}`} ref={ref}>
      <div className="chart-wrapper">
        <Pie
          data={data}
          options={options}
          plugins={plugins}
          onElementsClick={(elems) => {
            if (elems.length > 0) {
              setHoverIndex(elems[0].index);
            }
          }}
          getElementAtEvent={handleHover}
        />
        <div className="chart-center">
          <h3>Token Sale</h3>
          <p>50% Sale Allocation</p>
        </div>
      </div>
      <div className="chart-legend">
        <div>
          <span style={{ backgroundColor: 'rgba(54, 162, 235, 0.6)' }}></span>
          <p>20% Team Allocation</p>
        </div>
        <div>
          <span style={{ backgroundColor: 'rgba(75, 192, 192, 0.6)' }}></span>
          <p>15% Reserve Fund</p>
        </div>
        <div>
          <span style={{ backgroundColor: 'rgba(153, 102, 255, 0.6)' }}></span>
          <p>5% Community Allocation </p>
        </div>
        <div>
          <span style={{ backgroundColor: 'rgba(113, 182, 255, 0.6)' }}></span>
          <p>10% Ecosystem Development </p>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsChart;
