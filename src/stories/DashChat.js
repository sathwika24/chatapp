import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import {Profilelist} from './Profilelist'
import ChatConversationList from './ChatConversationList'
// import {Chatprofilewindow} from './Chatprofilewindow'
import PageHeader from './PageHeader'
import ChatProfile from './ChatProfile'

export const DashChat =({companyname,navlink1,navlink2,dataArray}) => {
    const[selectedChatIndex,setSelectedChatIndex] = useState(0);

    console.log (
        dataArray,
        selectedChatIndex,
    )
    return (
        <div className="container">
            <div className="row">
                <PageHeader companyname={companyname} navlink1={navlink1} navlink2={navlink2}/>
            </div>
            <div className="row">
              <div className="col-3" >
              {/* <ChatProfile
                dataArray={dataArray}
                /> */}
                <Profilelist 
           profileListArray={dataArray}
           selectedChatIndex={selectedChatIndex}
           onClick={(event) => setSelectedChatIndex(event.target.id) }
           /> 
            </div>
            <div className="col-6">
            <ChatConversationList
           profileListArray={dataArray}
           selectedChatIndex={selectedChatIndex}
           />
            </div>
        </div>
        </div>
    )
}


