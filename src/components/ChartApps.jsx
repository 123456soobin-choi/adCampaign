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
      text: '앱별 광고 수익',
      font: {
        size: 20,
      },
    },
  },
};

const ChartYears = ({ totalData }) => {
  const [chartData, setChartData] = useState();
  const apps = [];

  useEffect(() => {
    if (!totalData) {
      return;
    }
    const totalMon = totalData.map((x) => x.Monthly);

    for (let i = 0; i < totalMon.length; i++) {
      apps.push(totalMon[i].map((x) => x.App));

      for (let j = 0; j < 12; j++) {
        const appNames = apps[i][j].map((x) => x.AppName);

        if (appNames.includes('[OP&QA] 애드팝콘 캠페인 테스터_iOS(라이브)')) {
          console.log(apps[i][j]);
          console.log(apps[i][j].map((x) => x.Revenue));
        }
      }
    }

    const data = {
      labels: [
        'iOS 데모 매체',
        '[Dev] Mobile Test Jinuya',
        '[OP&QA] 애드팝콘 캠페인 테스터_iOS(라이브)',
      ],
      datasets: [
        {
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
          data: [1, 2, 3],
        },
      ],
    };
    setChartData(data);
  }, [totalData]);

  return (
    <StChartWrapper>
      {chartData && <Pie data={chartData} options={options} />}
    </StChartWrapper>
  );
};

export default ChartYears;

const StChartWrapper = styled.div`
  width: 30%;
  height: 50vh;
`;
