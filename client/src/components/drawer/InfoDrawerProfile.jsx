import { useContext } from "react"

import { AccountContext } from "../../context/AccountProvider";

const InfoDrawerProfile = () => {
    const { account } = useContext(AccountContext);

    return (<div className="py-2">
        <div className="flex justify-center mt-2">
            <img src={account.picture} alt="dp"
                width={100} height={100}
                className="rounded-md"
            />
        </div>
        <div className="my-8 mx-2">
            <label
                className="pb-1 border-b-[1px] border-b-slate-600"
            >Your name :</label>
            <p className="mt-1 text-lg">
                {account.name}
            </p>
        </div>
        <div className="my-8 mx-2">
            <label
                className="pb-1 border-b-[1px] border-b-slate-600"
            >Description :</label>
            <p className="mt-1 text-lg">
                Best thing about matrix is that you can hack it.
            </p>
        </div>
    </div>
    )
}

export default InfoDrawerProfile