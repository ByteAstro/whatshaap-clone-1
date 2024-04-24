import { useContext, useState } from "react"
import { LuHistory } from "react-icons/lu";
import { MdOutlineMessage } from "react-icons/md";

import { AccountContext } from "../../../context/AccountProvider"

import MenuHeaderDropDown from "./MenuHeaderDropDown";
import InfoDrawer from "../../drawer/InfoDrawer";

const MenuHeader = () => {
    const { account } = useContext(AccountContext);
    const [isInfoDrawerOpen, setIsInfoDrawerOpen] = useState(false);

    const toggleInfoDrawerOpen = () => {
        setIsInfoDrawerOpen(prevIsInfoDrawerOpen => !prevIsInfoDrawerOpen)
    }

    return (
        <div className="h-11 px-3 py-1 flex items-center justify-between">
            <img src={account.picture} alt="dp"
                className="w-7 rounded-md cursor-pointer"
                onClick={toggleInfoDrawerOpen}
            />

            <div className="flex items-center gap-2">
                <LuHistory
                    className="cursor-pointer mr-[5px]"
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