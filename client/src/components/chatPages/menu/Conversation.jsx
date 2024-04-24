import React from 'react'

const Conversation = ({ user }) => {
    console.log(user.name)

    return (
        <div className='flex gap-2 py-2 cursor-pointer mx-2 border-b-[1px] border-opacity-30 border-black'>
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