import React, { useState, useEffect } from 'react';
import Chart from 'components/Chart';
import { payment } from 'api/payment';

function Home() {
  const [chartData, setChartData] = useState('');

  useEffect(() => {
    const year = {
      search_year: 2021,
      // search_month: 2,
    };

    payment(year).then((res) => {
      setChartData(res);
    });
  }, []);

  return (
    <>
      <h3>애드팝콘 기간, 앱, 캠페인 별 성과</h3>
      <Chart chartData={chartData} />
    </>
  );
}

export default Home;
