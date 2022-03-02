import React from 'react';
import BasicTable from '../../components/UI/Table/BasicTable';
import Navigation from '../../components/UI/Navigation/Navigation';
import TicketChart from '../../components/UI/TicketChart/TicketChart';

const ListOfTasks = () => {
  return (
    <div>
      <Navigation />
      <BasicTable />
      <TicketChart />
    </div>
  );
};

export default ListOfTasks;
