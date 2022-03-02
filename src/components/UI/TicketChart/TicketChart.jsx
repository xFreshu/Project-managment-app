import React, { useContext } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import PropTypes from 'prop-types';
import { PieChartCard, ExtraInfoFromChart } from './TicketChart.styles';
import { AppContext } from '../../../providers/AppProvider';

const TicketChart = () => {
  const { tickets } = useContext(AppContext);

  const environmentList = tickets.map((item) => item.environment);

  const count = { dev: 0, test: 0, prod: 0 };
  //For of loop through array of environment list and counting, returning object
  for (const element of environmentList) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  console.log(count);

  return (
    <PieChartCard>
      <span>Ticket Pie Chart</span>
      <div>
        <span>Ticket count: {tickets.length}</span>
      </div>
      <PieChart
        data={[
          { title: 'Dev', value: count['dev'], color: '#4caf50' },
          { title: 'Test', value: count['test'], color: '#03a9f4' },
          { title: 'Production', value: count['prod'], color: '#f44336' }
        ]}
      />
      <ExtraInfoFromChart>
        <span>Dev tickets {count.dev}</span>
        <span>Test tickets {count.test}</span>
        <span>Prod tickets {count.prod}</span>
      </ExtraInfoFromChart>
    </PieChartCard>
  );
};

export default TicketChart;
