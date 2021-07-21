import React from 'react';

import PageFooter from './PageFooter';

export default {
  component:PageFooter,
  title: 'page/PageFooter',
 
};
const Template = (args) => <PageFooter {...args} />;

export const footer = Template.bind({});
footer.args = {
    companyname:"Metanoia Connect",
    copy:"@copyright"
}