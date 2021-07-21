import React from 'react';

import DashChat from './DashChat';
// import * as profilelistStories from './profilelist.stories';
import * as PageHeaderStories from "./PageHeader.stories"
import * as ChatProfileStories from "./ChatProfile.stories"




export default {
  component:DashChat,
  title: 'chatpage/DashChat',
 
};
const Template = (args) => <DashChat {...args} />;

export const main = Template.bind({});
main.args = {
//    ...PageHeaderStories.navbar.args,
//    ...ChatProfileStories.chatlistpage.args
dataArray  : [
    {   
        isOnline: true,

        link:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" ,
        numberOfUnreadMessages: 5,
        profilename: 'Ash',
        messageshortform: 'Lorem ipsum dolor sit amet',
        conversationArray: [{
            from: 'Ash',
            to: 'rahul',
            time: '',
            text:"cvbnmmnbvcvbnmmnjbvcvbnmkmjnhbv",
        },
        {
            from: 'rahul',
            to: 'Ash',
            time: '',
            text:"cvbnm,.l,mnbvbnmjk,l.;/.l,kmjnhbgvbhnjmk,l.l,kmjnhbg",
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
            from: 'Tom',
            to: 'rahul',
            time: '',
            text:"wdefrgthyjhgfcdxz",
        },
        {
            from: 'rahul',
            to: 'Tom',
            time: '',
            text:"wsdefrgthyjukilop'polkijuhygtfg",
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
            from: 'max',
            to: 'rahul',
            time: '',
            text:"asdfghjklkjhgfdsdfghjhgfdfgh",
        },
        {
            from: 'rahul',
            to: 'max',
            time: '',
            text:"wertyuiolkjhgfdsaxcvbnmlkjuyt",
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
        
