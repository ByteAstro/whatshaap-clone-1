import { useContext } from "react"
import { AccountContext } from "../../../context/AccountProvider"

const MenuHeader = () => {
    const { account } = useContext(AccountContext);

    return (
        <div className="h-11 px-3 py-1 flex items-center">
            <img src={account.picture} alt=""
                className="w-6 rounded-md"
            />
        </div>
    )
}

export default MenuHeader