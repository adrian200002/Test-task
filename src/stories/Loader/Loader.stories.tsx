import { Meta, StoryObj } from '@storybook/react';
import Loader from '../../components/Loader';

const meta: Meta = {
  title: 'Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  args: {
    color: 'inherit',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
