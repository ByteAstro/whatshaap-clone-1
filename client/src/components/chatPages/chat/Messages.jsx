/* eslint-disable react/prop-types */
import { AccountContext } from '../../../context/AccountProvider';
import { useContext, useState } from 'react';
import ChatFooter from './ChatFooter'
import { saveNewMessage } from '../../../service/api';

const Messages = ({ person, conversation }) => {
    const { account } = useContext(AccountContext);

    const [textMsg, setTextMsg] = useState('');

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
        }
    }

    return (
        <div className='flex flex-col justify-between h-[92%] '>

            <div className="m-2 chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded">
                        <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
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