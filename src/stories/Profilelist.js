import React from 'react'
import "./Profilelist.css"
import Profileitem from './Profileitem'
// import Conversationbox from './Conversationbox'


function Profilelist({profileListArray}) {
    
    return (
        
        <div className="">
        {profileListArray.map((item) => (
          <Profileitem link={item.link} profilename={item.profilename} messageshortform={item.messageshortform} numberOfUnreadMessages={item.numberOfUnreadMessages} isOnline={item.isOnline ?  "active":""} />
        ))}
        </div>
        
  
    )
}

export default Profilelist
