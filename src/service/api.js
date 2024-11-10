//api.js
import axios from 'axios';//for making HTTP requests.
const usersUrl = 'http://localhost:3002/users';//API server is running and handling user-related requests.

//Fetches user data from the server.
export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}

export const addUser = async (user) => {//Adds a new user to the server
    return await axios.post(`${usersUrl}`, user);
}



export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {// user = An object containing the updated user data.
    return await axios.put(`${usersUrl}/${id}`, user)
}