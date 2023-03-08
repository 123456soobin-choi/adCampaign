import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChartYears from 'components/ChartYears';
import ChartMonths from 'components/ChartMonths';
import ChartApps from './ChartApps';
import { payment } from 'api/payment';

function Home() {
  const [totalData, setTotalData] = useState('');

  useEffect(() => {
    async function yearData() {
      const years = [2018, 2019, 2020, 2021];
      const data = [];

      try {
        for (const year of years) {
          const res = await payment({ search_year: year });
          data.push(res.data.Payment);
        }
        setTotalData(data);
      } catch (error) {
        console.error(error);
      }
    }

    yearData();
  }, []);

  return (
    <>
      <Title>애드팝콘 기간, 앱, 캠페인 별 성과</Title>
      <StWrapper>
        <ChartYears totalData={totalData} />
        <ChartMonths totalData={totalData} />
        <ChartApps totalData={totalData} />
      </StWrapper>
    </>
  );
}

export default Home;

const Title = styled.h3`
  text-align: center;
`;
const StWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;
