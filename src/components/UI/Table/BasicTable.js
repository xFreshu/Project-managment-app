import React, { useMemo } from 'react';
import { Container, StyledTable } from './BasicTable.styles';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import { DUMMY_DATA } from '../../../data/Tasks';
import PropTypes from 'prop-types';

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DUMMY_DATA, []);
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
  getAssignedArray: PropTypes.array
};
export default BasicTable;
