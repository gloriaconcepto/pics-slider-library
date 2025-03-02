import type { Meta, StoryObj } from '@storybook/react';
import HelloWorld, { HelloWorldProps } from './HelloWorld';

const meta: Meta<HelloWorldProps> = {
    component: HelloWorld,
    title: 'Hello World',
    argTypes: {
        name: { control: "text" },
    },
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: "World",
    },
};

export const CustomName: Story = {
    args: {
        name: "Petty P",
    },
};
