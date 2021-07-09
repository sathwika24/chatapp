import React from 'react';

import Conversationbox from './Conversationbox';

export default {
  component:Conversationbox,
  title: 'Example/Conversationbox',
  
};

const Template = (args) => <Conversationbox {...args} />;

export const Chatbox = Template.bind({});
Chatbox.args = {
  name:'himaja',
  
};