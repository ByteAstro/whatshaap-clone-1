/* eslint-disable react/prop-types */
import { MdEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";

const ChatFooter = ({ textMsg, setTextMsg, sendTextMsg }) => {

    return (
        <div className="flex items-center justify-start bg-orange-400 gap-2 p-2">
            <MdEmojiEmotions
                className="text-3xl opacity-70"
            />
            <FaPaperclip
                className="text-2xl opacity-70"
            />
            <input type="text" placeholder="Type here"
                className="input bg-orange-600 input-bordered w-full placeholder:text-white text-white"
                value={textMsg}
                onChange={e => setTextMsg(e.target.value)}
                onKeyDown={sendTextMsg}
            />
            <FaMicrophone
                className="text-2xl opacity-70"
            />
        </div>
    )
}

export default ChatFooter