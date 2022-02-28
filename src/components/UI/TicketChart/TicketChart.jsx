import React, { useContext } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import PropTypes from 'prop-types';
import { PieChartCard, ExtraInfoFromChart } from './TicketChart.styles';
import { AppContext } from '../../../providers/AppProvider';

const TicketChart = ({ count }) => {
  const { tickets } = useContext(AppContext);
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

TicketChart.propTypes = {
  count: PropTypes.object
};

export default TicketChart;
