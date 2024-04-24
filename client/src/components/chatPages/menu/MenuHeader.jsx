import { useContext, useState } from "react"
import { LuHistory } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";

import { AccountContext } from "../../../context/AccountProvider"

import MenuHeaderDropDown from "./MenuHeaderDropDown";
import InfoDrawer from "../../drawer/InfoDrawer";
import { addUser } from "../../../service/api";

const MenuHeader = () => {
    const { account } = useContext(AccountContext);
    const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false);

    const toggleInfoDrawerOpen = () => {
        setIsInfoDrawerOpen(prevIsInfoDrawerOpen => !prevIsInfoDrawerOpen)
    }

    const sendbackendPostReq = async () => {
        await addUser();
    }

    return (
        <div className="h-14 px-3 py-1 bg-slate-400 flex mb-2 items-center justify-between">
            <img src={account.picture} alt="dp"
                className="w-7 rounded-md cursor-pointer"
                onClick={toggleInfoDrawerOpen}
            />

            <div className="flex items-center gap-2">
                <LuHistory
                    className="cursor-pointer mr-[5px]"
                    onClick={sendbackendPostReq}
                />
                <MdOutlineMessage
                    className="cursor-pointer mt-[1px]"
                />
                <MenuHeaderDropDown
                    toggleInfoDrawerOpen={toggleInfoDrawerOpen}
                />
            </div>
            <InfoDrawer
                isInfoDrawerOpen={isInfoDrawerOpen}
                toggleInfoDrawerOpen={toggleInfoDrawerOpen}
            />
        </div>
    )
}

export default MenuHeader