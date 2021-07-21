import React from 'react';

import ChatConversationWindow from './ChatConversationWindow';

export default {
  component:ChatConversationWindow,
  title: 'page/ChatConversationWindow',
 
};
const Template = (args) => <ChatConversationWindow {...args} />;

export const chatwindowpage = Template.bind({});
chatwindowpage.args = {
     dataArray : [
        {   
            isOnline:true,
            link:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" ,
            numberOfUnreadMessages: 5,
            profilename: 'Ash',
            messageshortform: 'Lorem ipsum dolor sit amet',
            conversationArray: [{
                from: 'Ash',
                to: 'rahual',
                time: '',
                text:"hey how are you",
                username:"Ash"
            },
            {
                from: 'rahul',
                to: 'Ash',
                time: '',
                text:"i am fine",
                username:'Ash'
            }
        ]
        },
        // {   
        //     isOnline:true,
        //     link:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" ,
        //     numberOfUnreadMessages: 5,
        //     profilename: 'Roy',
        //     messageshortform: 'Lorem ipsum dolor sit amet',
        //     conversationArray: [{
        //         from: 'Roy',
        //         to: 'rahual',
        //         time: '',
        //         text:"wertyhjkjmnhbgv cbnm,., mnbvbnm,",
        //     },
        //     {
        //         from: 'rahul',
        //         to: 'Roy',
        //         time: '',
        //         text:"dsfcgnhjmNHJMbgfthjulkjhng",
        //     }
        // ]
        // }
    ]
}
