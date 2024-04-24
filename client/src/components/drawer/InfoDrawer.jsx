import { IoMdArrowRoundBack } from "react-icons/io";

import InfoDrawerProfile from "./InfoDrawerProfile";

const InfoDrawer = ({ isInfoDrawerOpen, toggleInfoDrawerOpen }) => {
    return (
        <div className={`drawer absolute top-0 h-full transition-all 
            ${isInfoDrawerOpen ? 'left-0' : '-left-[100%]'}
`}>
            <div className={"drawer-open"}>
                <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <div className="flex items-center h-16 gap-5 mx-3 border-b-2 border-blue-300">
                        <IoMdArrowRoundBack
                            className="cursor-pointer text-xl my-2 hover:text-white"
                            onClick={toggleInfoDrawerOpen}
                        />
                        <button className="text-xl">
                            Profile
                        </button>
                    </div>
                    <InfoDrawerProfile />
                </div>
            </div>
        </div>
    )
}

export default InfoDrawer