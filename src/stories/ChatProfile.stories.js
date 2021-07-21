import React from 'react';

import ChatProfile from './ChatProfile';

export default {
  component:ChatProfile,
  title: 'page/ChatProfile',
 
};
const Template = (args) => <ChatProfile {...args} />;

export const chatlistpage = Template.bind({});
chatlistpage.args = {
    dataArray  : [
        {   
            isOnline: true,

            link:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" ,
            numberOfUnreadMessages: 5,
            profilename: 'Ash',
            messageshortform: 'Lorem ipsum dolor sit amet',
            conversationArray: [{
                from: 'Ash',
                to: 'rahual',
                time: '',
                text:"",
            },
            {
                from: 'rahul',
                to: 'Ash',
                time: '',
                text:"",
            }
        ]
        },
        {   
            isOnline: false,
        
            link:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
            numberOfUnreadMessages: "2",
            profilename: 'Tom',
            messageshortform: 'hey,how are you long time ..',
            conversationArray: [{
                from: 'Ash',
                to: 'rahual',
                time: '',
                text:"",
            },
            {
                from: 'rahul',
                to: 'Ash',
                time: '',
                text:"",
            }
        ]
        },

        {   
            isOnline: true,
        
            link:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
            numberOfUnreadMessages: 1,
            profilename: 'max',
            messageshortform: 'Lorem ipsum dolor sit amet',
            conversationArray: [{
                from: 'Ash',
                to: 'rahual',
                time: '',
                text:"",
            },
            {
                from: 'rahul',
                to: 'Ash',
                time: '',
                text:"",
            }
        ]
        },

        {   
            isOnline: false,
    
            nummsg:false,
            link:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png" ,
            numberOfUnreadMessages: "6",
            profilename: 'mike',
            messageshortform: 'Lorem ipsum dolor sit amet',
            conversationArray: [{
                from: 'Ash',
                to: 'rahual',
                time: '',
                text:"hjklkjhgfdsdfghjklkjhgfghjmkmjnhg",
            },
            {
                from: 'rahul',
                to: 'Ash',
                time: '',
                text:"eerggcvbnmjklkmjnhbgvfcdvfbgnhmjkmjnhbg",
            }
        ]
        },


        {   
            isOnline: true,

            nummsg:false,
            link: "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
            numberOfUnreadMessages: 2,
            profilename: 'harry',
            messageshortform: 'Lorem ipsum dolor sit amet',
            conversationArray: [{
                from: 'rahul',
                to: 'harry',
                time: '',
                text:"dfghjkl;/.lkijuhygtfrgthjmk,l.",
            },
            {
                from: 'rahul',
                to: 'harry',
                time: '',
                text:"dfvgbhnjmk,l.,km,jhgvfgbhnjmk,lkmjnhb",
            }
        ]
        }
    ]
}