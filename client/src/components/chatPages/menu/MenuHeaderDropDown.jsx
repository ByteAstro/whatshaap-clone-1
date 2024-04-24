import { IoMdMore } from "react-icons/io";

const MenuHeaderDropDown = ({ toggleInfoDrawerOpen }) => {
    return (<>
        <div className="dropdown dropdown-end">
            <IoMdMore
                className="cursor-pointer"
                role="button"
                tabIndex={0}
            />
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-white rounded-lg w-32 text-[10px]">
                <li><button
                    onClick={toggleInfoDrawerOpen}
                >Profile</button></li>
            </ul>
        </div>
    </>
    )
}

export default MenuHeaderDropDown