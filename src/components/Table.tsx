import React, { useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, TablePagination, TableSortLabel, Paper } from '@mui/material';
import { Tag } from '../utils/types/Tag';

type Props = {
  tags: Tag[];
}

function TableComponent({ tags }: Props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
  }

  const sortedTags = React.useMemo(() => {
    const comparator = (a: Tag, b: Tag) => {
      if (order === 'asc') {
        return a.count - b.count;
      } else {
        return b.count - a.count;
      }
    };

    return [...tags].sort(comparator).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    );
  }, [tags, order, page, rowsPerPage]);

  return (
    <Paper elevation={6} sx={{ width: '100%'}}>
      <TablePagination 
        component='div'
        rowsPerPageOptions={[5, 10, 24]}
        count={tags.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Table sx={{minWidth: 320}} size='small'>
        <TableHead sx={{fontWeight: 700}}>
          <TableRow>
            <TableCell sx={{width: 80, fontWeight: 'bold'}}>
              Tags
            </TableCell>
            <TableCell sx={{width: 80, fontWeight: 'bold'}}>
              <TableSortLabel
                active={true}
                direction={order}
                onClick={handleSort}
                >
                Posts Count
              </TableSortLabel> 
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedTags.map(tag => (
            <TableRow
              key={tag.name}>
              <TableCell>
                {tag.name}
              </TableCell>
              <TableCell>
                {tag.count}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TableComponent;
