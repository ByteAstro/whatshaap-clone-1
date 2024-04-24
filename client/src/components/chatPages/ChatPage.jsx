import { useContext } from "react"
import { AccountContext } from "../../context/AccountProvider"

import Menu from "./menu/Menu"
import EmptyChat from "./chat/EmptyChat"
import ChatBox from "./chat/ChatBox"

const ChatPage = () => {
    const { person } = useContext(AccountContext);

    return (<div className="bg-orange-200 h-full w-full p-2">
        <div className="flex">
            <div className="bg-blue-300 w-[30%] min-w-[200px] h-[98vh] border-black border-r-2">
                <Menu />
            </div>
            <div className="bg-slate-300 w-[70%] min-w-52 h-[98vh]">
                {Object.keys(person).length > 0 ?
                    <ChatBox /> : <EmptyChat />
                }
            </div>
        </div>
    </div>
    )
}

export default ChatPage