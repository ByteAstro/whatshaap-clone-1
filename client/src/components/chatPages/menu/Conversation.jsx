/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider';
import React from 'react'
import { setConversation } from '../../../service/api';

const Conversation = ({ user }) => {
    const { setPerson, account } = useContext(AccountContext);

    // console.log(user.name)
    const getUserConversation = async () => {
        setPerson(user);
        await setConversation({
            senderId: account.sub,
            receiverId: user.sub
        })
    }

    return (
        <div className='flex gap-2 py-2 cursor-pointer mx-2 border-b-[1px] border-opacity-30 border-black'
            onClick={getUserConversation}
        >
            <div>
                <img src={user.picture} alt="dp"
                    width={30}
                    className='h-8 rounded-2xl object-cover'
                />
            </div>
            <div>
                <div>
                    <p>{user.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Conversation