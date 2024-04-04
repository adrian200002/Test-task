import { Meta, StoryObj } from '@storybook/react';
import Table from '../../components/Table';

interface Tag {
  name: string;
  count: number;
}

const sortedTags: Tag[] = [
  { name: 'Tag 1', count: 20 },
  { name: 'Tag 2', count: 15 },
  { name: 'Tag 3', count: 10 },
];

const meta: Meta = {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  args: {
    tags: sortedTags
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {}