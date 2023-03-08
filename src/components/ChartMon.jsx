import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: '월별 광고 수익',
      font: {
        size: 20,
      },
    },
  },
};

const Chart2 = ({ chartData }) => {
  const [revData, setRevData] = useState();
  const totalMon = chartData.map((x) => x.Monthly);
  console.log(totalMon);

  useEffect(() => {
    if (!chartData) {
      return;
    }

    const data = {
      labels: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ],
      datasets: [
        {
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(239,153,171,0.2)',
            'rgba(0,153,255,0.2)',
            'rgba(247,181,12,0.2)',
            'rgba(11,128,128,0.2)',
            'rgba(85,0,254,0.2)',
            'rgba(255,128,0,0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            '#ef99ab',
            '#0099ff',
            '#f7b50c',
            '#0b8080',
            '#5500fe',
            '#ff8000',
          ],
          borderWidth: 1,
          data: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        },
      ],
    };
    setRevData(data);
  }, []);

  function onClickSelect() {
    // totalMon[0]
  }

  return (
    <StChartWrapper>
      {revData && <Pie data={revData} options={options} />}
      <select>
        <option onClick={onClickSelect}>2018</option>
        <option onClick={onClickSelect}>2019</option>
        <option onClick={onClickSelect}>2020</option>
        <option onClick={onClickSelect}>2021</option>
      </select>
    </StChartWrapper>
  );
};

export default Chart2;

const StChartWrapper = styled.div`
  width: 50%;
  height: 50vh;
`;
