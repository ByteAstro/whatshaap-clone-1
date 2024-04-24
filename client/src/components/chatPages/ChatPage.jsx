import Menu from "./menu/Menu"
import EmptyChat from "./chat/EmptyChat"

const ChatPage = () => {
    return (<div className="bg-orange-200 h-full w-full p-2">
        <div className="flex">
            <div className="bg-blue-300 w-[30%] min-w-[200px] h-full">
                <Menu />
            </div>
            <div className="bg-slate-300 w-[70%] min-w-52 h-full border-black border-l-2">
                <EmptyChat />
            </div>
        </div>
    </div>
    )
}

export default ChatPage