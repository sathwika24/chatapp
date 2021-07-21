import React from 'react';

import ChatConversationList from './ChatConversationList';

export default {
  component:ChatConversationList,
  title: 'Example/ChatConversationList',
 
};
const Template = (args) => <ChatConversationList {...args} />;

export const ashchat = Template.bind({});
ashchat.args = {
    profilename:'Ash',
    conversationArray: [{
        from: 'Ash',
        to: 'rahual',
        time: '',
        text:"A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of several sentences. There are usually between three and eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again. This makes it easier to see when one paragraph ends and another begins.",
        profilename:'Ash'
    },
    {
        from: 'rahul',
        to: 'Ash',
        time: '',
        text:"A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of several sentences. There are usually between three and eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again. This makes it easier to see when one paragraph ends and another begins.",
        profilename:'Ash'
    }
],
}

export const tomchat = Template.bind({});
tomchat.args = {
    profilename:'Tom',
    conversationArray: [{
        from: 'Tom',
        to: 'rahual',
        time: '',
        text:"A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of several sentences. There are usually between three and eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again. This makes it easier to see when one paragraph ends and another begins.",
        profilename:'Tom'
    },
    {
        from: 'rahul',
        to: 'Tom',
        time: '',
        text:"A paragraph is a group of words put together to form a group that is usually longer than a sentence. Paragraphs are often made up of several sentences. There are usually between three and eight sentences. Paragraphs can begin with an indentation (about five spaces), or by missing a line out, and then starting again. This makes it easier to see when one paragraph ends and another begins.",
        profilename:'Tom'
    }
],
}