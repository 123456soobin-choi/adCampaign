import { useState, useEffect } from 'react';
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
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: '연도별 총 수익',
      font: {
        size: 20,
      },
    },
  },
};

const Chart = ({ chartData }) => {
  const [revData, setRevData] = useState();

  useEffect(() => {
    if (!chartData) {
      return;
    }
    const totalRev = chartData.map((x) => x.Revenue);

    const data = {
      labels: ['2018', '2019', '2020', '2021'],
      datasets: [
        {
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'red',
          borderWidth: 2,
          data: [totalRev[0], totalRev[1], totalRev[2], totalRev[3]],
        },
      ],
    };
    setRevData(data);
  }, []);

  return (
    <StChartWrapper>
      {revData && <Bar data={revData} options={options} />}
    </StChartWrapper>
  );
};

export default Chart;

const StChartWrapper = styled.div`
  width: 50%;
  height: 50vh;
`;
