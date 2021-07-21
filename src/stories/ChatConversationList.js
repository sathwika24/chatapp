import React from 'react'
import "./ChatConversationList.css"
import "bootstrap/dist/css/bootstrap.css"
import 'font-awesome/css/font-awesome.min.css'
import ChatConversationListItems from './ChatConversationListItems'
import ChatCoversationbox from './ChatCoversationbox'

export const ChatConversationList = ({profileListArray,selectedChatIndex}) => {
    return (
        <div className="">
          <div class="d-flex bd-highlight bgc mb-2">
            <h3 className="p-2 flex-grow-1 bd-highlight">{profileListArray[selectedChatIndex]['profilename']}</h3>
            <i className="p-2 bd-highlight fa fa-phone my-1 mx-2 pt-3"></i>
            <i className="p-2 bd-highlight fa fa-video-camera my-1 mx-2 pt-3"></i>
        </div> 
        <div className="mb-2">  
        {/* {conversationArray.map((items,index ) => (
         <ChatConversationListItems
            from={items.from} 
            username={items.profilename}
            text={items.text}
            time={items.time}
            index={index}
            selectedChatIndex={selectedChatIndex}
         />
        ))} */}
        <ChatCoversationbox
        profileListArray={profileListArray}
        selectedChatIndex={selectedChatIndex}
        />
        </div>
        <div className="">
        <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping"><i className="fa fa-smile-o" aria-hidden="true"></i></span>
  <input type="text" class="form-control" placeholder="Type a message " aria-label="Username" aria-describedby="addon-wrapping"/>
  <span class="input-group-text"><i class="fa fa-paperclip" aria-hidden="true"></i></span>
  <span class="input-group-text"><i class="fa fa-paper-plane" aria-hidden="true"></i></span>
    </div>        
        </div>
        </div>
    )
}


