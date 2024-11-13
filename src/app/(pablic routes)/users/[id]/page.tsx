import React from 'react';
import {getUser} from "@/app/services/api.service";
import UserComponent from "@/app/components/user/UserComponent";

type Params = {
    id:string
}

const UserPage = async ({params}:{params: Params}) => {
    const user = await getUser(params.id)

    return (
        <div>
            <UserComponent item={user}/>
        </div>
    );
};

export default UserPage;