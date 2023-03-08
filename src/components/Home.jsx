import React, { useState, useEffect } from 'react';
import ChartYear from 'components/ChartYear';
import ChartMon from './ChartMon';
import { payment } from 'api/payment';

function Home() {
  const [chartData, setChartData] = useState('');

  useEffect(() => {
    async function yearData() {
      const years = [2018, 2019, 2020, 2021];
      const data = [];

      try {
        for (const year of years) {
          const res = await payment({ search_year: year });
          data.push(res.data.Payment);
        }
        setChartData(data);
      } catch (error) {
        console.error(error);
      }
    }

    yearData();
  }, []);

  return (
    <>
      <h3>애드팝콘 기간, 앱, 캠페인 별 성과</h3>
      <ChartYear chartData={chartData} />
      <ChartMon chartData={chartData} />
    </>
  );
}

export default Home;
