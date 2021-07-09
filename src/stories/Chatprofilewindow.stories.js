import React from 'react';

import Chatprofilewindow from './Chatprofilewindow';

export default {
  component:Chatprofilewindow,
  title: 'Example/Chatprofilewindow',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Chatprofilewindow {...args} />;

export const Profile = Template.bind({});
Profile.args = {
  name:'himaja',
  detailsofperson:'Founder,Aviato "Bachrnamity"',
  location:'San Francisco,California',
  mobileno:"5678998765",
  emailid:"himaja95@avtio.com"
};