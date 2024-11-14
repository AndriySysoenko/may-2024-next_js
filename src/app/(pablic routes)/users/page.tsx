import React from 'react';
import UsersComponent from "@/app/components/users/UsersComponent";
import {getUsers} from "@/app/services/api.service";


const UsersPage = async () => {
    const users = await getUsers();

    return (
        <div>
            {
               <UsersComponent users={users}/>
            }
        </div>
    );
};

export default UsersPage;