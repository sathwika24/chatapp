import React from 'react'
import "./Profilelist.css"
import Profileitem from './Profileitem'
// import Conversationbox from './Conversationbox'


export const Profilelist =({profileListArray,selectedChatIndex,onClick}) => {
    console.log(
      profileListArray,
      selectedChatIndex,
      onClick
    );
    return (
        <>
        {profileListArray.map((item,index) => (
          <Profileitem
          ItemData={item}
            index={index} 
            selectedChatIndex={selectedChatIndex}
             onClick={onClick}
             />
        ))}
        </>
        
  
    )
}

export default Profilelist
