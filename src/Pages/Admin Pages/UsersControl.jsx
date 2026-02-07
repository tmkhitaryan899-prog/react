import React, {useEffect, useState} from 'react';
import axios from "axios";

const UsersControl = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try{
            const response = await axios.get("http://localhost:4000/users");
            setUsers(response.data);

        }catch(e){
            console.log(e.message);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, [])


    return (
        <div>
            <h1>Users Control</h1>

            <main className="grid grid-cols-5 gap-4">
                {
                    users?.length === 0 ? <p>No Products</p> : users.map(user => (
                        <div
                            className="border border-black p-4 rounded-3xl w-fit flex flex-col items-center justify-center"
                            key={user.id}>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    ))
                }
            </main>

        </div>
    );
};

export default UsersControl;