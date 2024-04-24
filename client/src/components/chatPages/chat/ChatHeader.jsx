/* eslint-disable react/prop-types */
import { IoMdMore } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { defaultProfilePicture } from '../../../constants/data';

const ChatHeader = ({ person }) => {
    return (
        <div className="h-14 px-3 bg-slate-400 flex justify-between">
            <div className="flex items-center">
                <img src={person.picture || defaultProfilePicture} alt="db"
                    className="w-8 h-8 object-cover rounded"
                />
                <div>
                    <p className="ml-3"
                    >{person.name}</p>
                    <p className="text-[11px] ml-3 opacity-60"
                    >Offline</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <IoSearch />
                <IoMdMore />
            </div>
        </div>
    )
}

export default ChatHeader