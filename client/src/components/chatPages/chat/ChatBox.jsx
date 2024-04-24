import { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'

import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { getConversation } from '../../../service/api'

const ChatBox = () => {
    const { person, account } = useContext(AccountContext);

    const [conversation, setConversation] = useState([]);

    useEffect(() => {
        const getConversationDetails = async () => {
            let conversationData = await getConversation({
                senderId: account.sub, receiverId: person.sub
            });
            setConversation(conversationData);
        }
        getConversationDetails();
    }, [person.sub]);

    return (
        <div className='h-full'>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </div>
    )
}

export default ChatBox