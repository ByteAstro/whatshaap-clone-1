import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'

import ChatHeader from './ChatHeader'
import Messages from './Messages'

const ChatBox = () => {
    const { person } = useContext(AccountContext);

    return (
        <div className='h-full'>
            <ChatHeader person={person} />
            <Messages person={person} />
        </div>
    )
}

export default ChatBox