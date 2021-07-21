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
  isonline:true,
  link: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
  profilename:'Ash',
  detailsofperson:'Founder,Aviato "Bachrnamity"',
  location:'San Francisco,California',
  mobileno:"5678998765",
  emailid:"ash635@avtio.com",
};