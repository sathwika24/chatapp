import React from 'react';

import Profilelist from './Profilelist';

export default {
  component:Profilelist,
  title: 'Example/Profilelist',
 
};
const Template = (args) => <Profilelist {...args} />;

export const list = Template.bind({});
list.args ={
    profileListArray  : [
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
            nummsg:false,
            link: "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
            numberOfUnreadMessages: 2,
            profilename: 'harry',
            messageshortform: 'Lorem ipsum dolor sit amet',
            conversationArray: [{
                from: 'rahul',
                to: '',
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
        }
    ]
}
    


// export const user1 = Template.bind({});
// user1.args = {
//  profilename:"Ella",
//  link:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" ,
// };

// export const user2 = Template.bind({});
// user2.args = {
//  profilename:"Ella",
//  link:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" ,
// };

// export const user3 = Template.bind({});
// user3.args = {
//  profilename:"Ella",
//  link:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" ,
// };

// export const user4 = Template.bind({});
// user4.args = {
//  profilename:"Ella",
//  link:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" ,
// };

// export const user5 = Template.bind({});
// user5.args = {
//  profilename:"Ella",
//  link:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" ,
// };

// export const user6 = Template.bind({});
// user6.args = {
//  profilename:"Ella",
//  link:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" ,
// };

// export const user7 = Template.bind({});
// user7.args = {
//  profilename:"Ella",
//  link:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" ,
// };

// export const user8 = Template.bind({});
// user8.args = {
//  profilename:"Ella",
//  link:"https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" ,
//  };