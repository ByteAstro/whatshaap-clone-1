import { emptyChatImage } from '../../../constants/data'

const EmptyChat = () => {
    return (
        <div>
            <div className='flex flex-col justify-between items-center h-[98vh]'>
                <img src={emptyChatImage} alt="Empty chat"
                    className='w-full'
                />
                <div className='flex flex-col h-full items-center justify-center gap-4 px-20 text-center bg-slate-100'>
                    <p>WhatsApp Web</p>
                    <p>Send and receive messages without keeping your phone online.</p>
                    <p>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyChat