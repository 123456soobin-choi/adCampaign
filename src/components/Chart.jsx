// import { useState, useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register();

export const options = {
  responsive: true, // 반응형
  maintainAspectRatio: false, // 창 크기에 따라 크기가 바뀌던 하위 div가 상위 div에 구속됨
  // 마우스 위에 올렸을 때 보여줄 interaction
  interaction: {
    mode: 'point',
    intersect: false,
  },
  // plugins: {
  //   legend: { position: 'bottom' }, // 범례
  //   title: {
  //     display: true,
  //     text: 'Total', // 차트 제목
  //     font: {
  //       size: 20,
  //     },
  //   },
  // },
  // x축과 y축 크기
  // scales: {
  //   x: {
  //     grid: {
  //       display: false,
  //     },
  //   },
  //   y: {
  //     grid: {
  //       color: '#E3E3E3',
  //     },
  //   },
  // },
};

const Chart = ({ chartData }) => {
  // console.log(chartData);

  // const Chart = () => {
  const data = {
    labels: ['2019', '2020', '2021'], // 차트 항목들
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: chartData,
        // data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <StChartWrapper>
      <h3>캠페인별 수익 비율</h3>
      <StChartContainer>
        <Pie data={data} options={options} />
      </StChartContainer>
    </StChartWrapper>
  );
};

export default Chart;

const StChartWrapper = styled.div``;

const StChartContainer = styled.div`
  width: 100%;
  height: 100%;
  /* width: 90vw; */
  /* max-width: 900px; */
`;
