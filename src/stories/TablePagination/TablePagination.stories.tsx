import { Meta, StoryObj } from '@storybook/react';
import { TablePagination } from '@mui/material';
import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'TablePagination',
  component: TablePagination,
  parameters: {
    layout: 'centered',
  },
  args: {
    onPageChange: fn(),
    onRowsPerPageChange: fn(),
    count: 100,
    rowsPerPage: 10,
    page: 0,
    rowsPerPageOptions: [5, 10, 20],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
