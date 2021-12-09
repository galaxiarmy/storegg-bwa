import { Meta } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/moleculs/StepItem";


export default {
    title: 'Components/Molecules/StepItem',
    component: StepItem,  
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});

Default.props = {
    title: "Super Mechs",
    icon: "step1",
    desc1: "Pilih Salah Satu Game",
    desc2: "yang ingin kamu top up"

};