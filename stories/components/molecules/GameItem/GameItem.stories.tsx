import { Meta } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/moleculs/GameItem"; { GameItemProps } from "../../../../components/moleculs/GameItem";

export default {
    title: 'Components/Molecules/GameItem',
    component: GameItem,  
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.props = {
    title: "Super Mechs",
    category: "Mobile",
    thumbnail: "/img/Thumbnail-1.png"
};