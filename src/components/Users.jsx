import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([]);

    const getUsers = async ()=>{
        const response = await fetch('http://localhost:3000/users', {method:'GET'});
        const data = await response.json();
        setUsers(data);
    }

    useEffect(()=>{
        getUsers();
    },[]);

  return (
   
    <table className='table container'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}
 
