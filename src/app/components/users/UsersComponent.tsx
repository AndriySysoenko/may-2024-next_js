import React, {FC} from 'react';
import {IUser} from "@/app/models/IUser";
import Link from "next/link";

type UsersType = {users: IUser[]}

const UsersComponent:FC<UsersType> = ({users}) => {

    return (
        <div>
            {
                users.map((user:IUser) => <div key={user.id}>
                    <Link href={'/users/' + user.id}>{user.id} {user.name}</Link>

                </div>)
            }
        </div>
    );
};

export default UsersComponent;