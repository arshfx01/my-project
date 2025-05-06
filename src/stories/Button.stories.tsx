import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';
import { Home } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'success', 'warning', 'danger', 'info'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outlined', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button with label
export const Default: Story = {
  args: {
    children: <Button.Label>Click me</Button.Label>,
    intent: 'primary',
    variant: 'solid',
    size: 'md',
  },
};

// Button with icon
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Home />
        </Button.Icon>
        <Button.Label>Home</Button.Label>
      </>
    ),
    intent: 'primary',
    variant: 'solid',
    size: 'md',
  },
};

// Icon only button
export const IconOnly: Story = {
  args: {
    children: (
      <Button.Icon type="only">
        <Home />
      </Button.Icon>
    ),
    intent: 'primary',
    variant: 'solid',
    size: 'md',
  },
};

// Different variants
export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button.Root variant="solid" intent="primary">
        <Button.Label>Solid</Button.Label>
      </Button.Root>
      <Button.Root variant="soft" intent="primary">
        <Button.Label>Soft</Button.Label>
      </Button.Root>
      <Button.Root variant="outlined" intent="primary">
        <Button.Label>Outlined</Button.Label>
      </Button.Root>
      <Button.Root variant="ghost" intent="primary">
        <Button.Label>Ghost</Button.Label>
      </Button.Root>
    </div>
  ),
};

// Different intents
export const Intents: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button.Root intent="primary">
        <Button.Label>Primary</Button.Label>
      </Button.Root>
      <Button.Root intent="secondary">
        <Button.Label>Secondary</Button.Label>
      </Button.Root>
      <Button.Root intent="accent">
        <Button.Label>Accent</Button.Label>
      </Button.Root>
      <Button.Root intent="success">
        <Button.Label>Success</Button.Label>
      </Button.Root>
      <Button.Root intent="warning">
        <Button.Label>Warning</Button.Label>
      </Button.Root>
      <Button.Root intent="danger">
        <Button.Label>Danger</Button.Label>
      </Button.Root>
      <Button.Root intent="info">
        <Button.Label>Info</Button.Label>
      </Button.Root>
    </div>
  ),
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button.Root size="sm">
        <Button.Label>Small</Button.Label>
      </Button.Root>
      <Button.Root size="md">
        <Button.Label>Medium</Button.Label>
      </Button.Root>
      <Button.Root size="lg">
        <Button.Label>Large</Button.Label>
      </Button.Root>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  args: {
    children: <Button.Label>Disabled Button</Button.Label>,
    disabled: true,
  },
}; 