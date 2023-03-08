import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' },
    title: {
      display: true,
      text: '기간별 총 캠페인 완료 수',
      font: {
        size: 20,
      },
    },
  },
};

const ChartMonths = ({ totalData }) => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    if (!totalData) {
      return;
    }
    const totalMon = totalData.map((x) => x.Monthly);

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
          fill: true,
          label: '2018',
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
          data: totalMon[0].map((x) => x.Complete),
        },
        {
          fill: true,
          label: '2019',
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
          data: totalMon[1].map((x) => x.Complete),
        },
        {
          fill: true,
          label: '2020',
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
          data: totalMon[2].map((x) => x.Complete),
        },
        {
          fill: true,
          label: '2021',
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
          data: totalMon[3].map((x) => x.Complete),
        },
      ],
    };
    setChartData(data);
  }, [totalData]);

  return (
    <StChartWrapper>
      {chartData && <Line data={chartData} options={options} />}
    </StChartWrapper>
  );
};

export default ChartMonths;

const StChartWrapper = styled.div`
  width: 70%;
  height: 60vh;
`;
