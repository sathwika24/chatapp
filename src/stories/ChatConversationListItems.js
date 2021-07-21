import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "./ChatConversationList.css"
export const ChatConversationListItems =({text,time,from,profilename,ItemData,username}) => {
    return (
        <div className="vh-100">
        <div className={`chat ${ItemData.from == username ? "right": "left" }`}>
        <div className="bg px-2" >{ItemData.text}</div>
        <div>{ItemData.time}</div>   
        </div>
        </div>
    )
}


