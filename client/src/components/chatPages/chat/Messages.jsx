import ChatFooter from './ChatFooter'

const Messages = () => {
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

            <ChatFooter />

        </div>
    )
}

export default Messages