import React from 'react'
import ChatConversationListItems from './ChatConversationListItems'

const ChatCoversationbox = ({profileListArray,selectedChatIndex}) => {
    return (
        <div>
          {profileListArray[selectedChatIndex].conversationArray.map((item,index)=>(
             <ChatConversationListItems
             ItemData={item}
             index={index}
             username={profileListArray[selectedChatIndex].profilename}
             selectedChatIndex={selectedChatIndex} 
             />
          )
          )

          }  
        </div>
    )
}

export default ChatCoversationbox
