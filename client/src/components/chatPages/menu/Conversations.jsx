import { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../service/api';
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';

const Conversations = () => {
    const { account } = useContext(AccountContext);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
        };
        fetchData();
    }, []);

    return (
        <div>
            {users.map(user => (
                (user.sub !== account.sub) &&
                <Conversation key={user.sub}
                    user={user}
                />
            ))}
        </div>
    )
}

export default Conversations