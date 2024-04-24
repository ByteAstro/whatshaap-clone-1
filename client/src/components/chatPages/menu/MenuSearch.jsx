import { IoSearch } from "react-icons/io5";

const MenuSearch = () => {
    return (
        <div>
            <div className="flex items-center justify-between mx-2 mb-2 rounded-md bg-slate-800">
                <div className="text-white px-2">
                    <IoSearch />
                </div>
                <input type="text"
                    className="input w-[90%] text-white focus-within:outline-0 bg-slate-800 rounded-none h-10 text-sm"
                    placeholder="Search" />
            </div>
        </div>
    )
}

export default MenuSearch