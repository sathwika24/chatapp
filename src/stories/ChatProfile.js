import React,{useState} from 'react'
import Profilelist from './Profilelist'

export const ChatProfile = ({dataArray}) => {
    const [selectedChatIndex, setSelectedChatIndex] = useState(0);
    console.log(
        dataArray,
        selectedChatIndex,
        setSelectedChatIndex,
    );
    return (
        <>
           <Profilelist 
           profileListArray={dataArray}
           selectedChatIndex={selectedChatIndex}
           onClick={(event) => setSelectedChatIndex(event.target.id) }
           /> 
        </>
    )
}


