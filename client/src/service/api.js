import axios from 'axios';
import { toast } from 'react-hot-toast';

const backend_endpoint = import.meta.env.VITE_BACKEND_ENDPOINT;

export const addUser = async (data) => {
    await axios.post(`${backend_endpoint}/adduser`, data)
        .then(response => {
            console.log('SIGNIN SUCCESS', response);
            toast.success(response.data.message);
        }).catch((err) => {
            console.log('Error while calling addUser_API: ', err.message);
            toast.error(err.response.data.error);
        })
}

export const getUsers = async () => {
    let fetchedUsers;
    await axios.get(`${backend_endpoint}/users`)
        .then(response => {
            // console.log('SIGNIN SUCCESS', response.data.users);
            fetchedUsers = response.data.users;
        }).catch((err) => {
            console.log('Error while calling GET_/users: ', err.message);
            toast.error(err.response.data.error);
        });
    return fetchedUsers;
}

export const setConversation = async (data) => {
    // data = {senderId: account.sub, receiverId: user.sub}
    await axios.post(`${backend_endpoint}/conversation/add`, data)
        .then((response) => {
            console.log('CONVERSATION ADDED', response);
        }).catch((err) => {
            console.log('Error while calling GET_/users: ', err.message);
        })
}