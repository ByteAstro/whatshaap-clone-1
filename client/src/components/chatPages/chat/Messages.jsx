/* eslint-disable react/prop-types */
import { AccountContext } from '../../../context/AccountProvider';
import { useContext, useEffect, useState } from 'react';
import ChatFooter from './ChatFooter';
import MessageBubble from './MessageBubble';
import { getConversationMessages, saveNewMessage } from '../../../service/api';

const Messages = ({ person, conversation }) => {
    const { account } = useContext(AccountContext);

    const [textMsg, setTextMsg] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    useEffect(() => {
        const getAllMessages = async () => {
            let allMessages = await getConversationMessages(conversation._id);
            console.log(allMessages);
            setChatMessages(allMessages);
        }
        conversation._id && getAllMessages();
    }, [person.sub, conversation._id, newMessageFlag])

    const sendTextMsg = async (e) => {
        const keyPressed = e.keycode || e.which;
        if (keyPressed === 13) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: textMsg
            };

            await saveNewMessage(message);
            setTextMsg('');
            setNewMessageFlag(!newMessageFlag);
        }
    }

    return (
        <div className='flex flex-col justify-between h-[92%] '>

            <div>
                {chatMessages && chatMessages.map((message) => (
                    <MessageBubble key={message._id}
                        message={message}
                    />
                ))}
            </div>

            <ChatFooter
                setTextMsg={setTextMsg}
                textMsg={textMsg}
                sendTextMsg={sendTextMsg}
            />

        </div>
    )
}

export default Messages