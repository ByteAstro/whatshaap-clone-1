/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { formatDate } from '../../../utils/common-utils'

const MessageBubble = ({ message }) => {
    const { account, person } = useContext(AccountContext);
    const isSender = account.sub === message.senderId;

    return (
        <div className={`chat
        ${isSender ? 'chat-start' : 'chat-end'} `}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Profile pic"
                        src={`${isSender ? account.picture : person.picture}`}
                    />
                </div>
            </div>
            <div className="chat-bubble">{message.text}</div>
            <div className="chat-footer opacity-50">
                <time className="text-xs opacity-70">{formatDate(message.createdAt)}</time>
            </div>
        </div>
    )
}

export default MessageBubble