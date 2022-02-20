import React, { useContext, useMemo } from 'react';
import { Container, StyledTable } from './BasicTable.styles';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import PropTypes from 'prop-types';
import { AppContext } from '../../../providers/AppProvider';

const BasicTable = () => {
  const { tickets } = useContext(AppContext);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tickets, []);
  const tableInstance = useTable({
    columns,
    data
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <Container>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </Container>
  );
};
BasicTable.propTypes = {
  getAssignedArray: PropTypes.array,
  jsonTask: PropTypes.object,
  setJsonTask: PropTypes.func
};
export default BasicTable;
