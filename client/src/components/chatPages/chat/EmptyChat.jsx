import { emptyChatImage } from '../../../constants/data'

const EmptyChat = () => {
    return (
        <div>
            <div className='flex flex-col justify-between items-center h-[98vh] bg-slate-100'>
                <img src={emptyChatImage} alt="Empty chat"
                    className='h-1/2'
                />
                <div className='flex flex-col h-full items-center justify-center gap-4 px-20 text-center '>
                    <p>WhatsApp Web</p>
                    <p>Send and receive messages without keeping your phone online.</p>
                    <p>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyChat