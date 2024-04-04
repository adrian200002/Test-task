import { Meta, StoryObj } from '@storybook/react';
import Error from '../../components/Error';

const meta: Meta = {
  title: 'Error',
  component: Error,
  parameters: {
    layout: 'centered',
  },
  args: {
    severity: "error",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
