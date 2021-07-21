import React from 'react'
import ChatConversationList from './ChatConversationList'
import ChatCoversationbox from './ChatCoversationbox'

const ChatConversationWindow = ({dataArray,selectedChatIndex}) => {
    // const [selectedChatIndex, setSelectedChatIndex] = useState(0); 
    return (
        <div>
           <ChatConversationList
           profileListArray={dataArray}
           selectedChatIndex={selectedChatIndex}
           />
        </div>
    )
}

export default ChatConversationWindow
