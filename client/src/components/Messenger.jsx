import LoginPage from "./authPages.jsx/LoginPage"
import { useContext } from 'react';
import { AccountContext } from "../context/AccountProvider";
import ChatPage from './chatPages/ChatPage.jsx';

const Messenger = () => {
    const { account } = useContext(AccountContext);
    // console.log(account ? `account: ${account}` : 'account not found')

    return (
        <div className="h-full bg-[#DCDCDC]">
            {account ? (<>
                <ChatPage />
            </>) : (<>
                <div className="navbar h-52 bg-[#00BFA5]" />
                <LoginPage />
            </>)}
        </div>
    )
}

export default Messenger