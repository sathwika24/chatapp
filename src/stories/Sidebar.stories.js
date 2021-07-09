import React from 'react';

import Sidebar from './Sidebar';

export default {
  component:Sidebar,
  title: 'Example/Sidebar',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Sidebar {...args} />;

export const Sidetop = Template.bind({});
Sidetop.args = {
  appname:'piperchat',

};
