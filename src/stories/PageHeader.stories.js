import React from 'react';

import PageHeader from './PageHeader';

export default {
  component:PageHeader,
  title: 'page/PageHeader',
 
};
const Template = (args) => <PageHeader {...args} />;

export const navbar = Template.bind({});
navbar.args = {
    companyname:"Metanoia Connect",
    navlink1:"Login",
    navlink2:"Register"

}
