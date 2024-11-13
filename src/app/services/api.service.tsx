import {IUser} from "@/app/models/IUser";


export const getUsers= async (): Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then (value => value.json());


}

export const getUser= async (id: string): Promise<IUser>  => {
    return await fetch ('https://jsonplaceholder.typicode.com/users' + '/' + id)
        .then (value => value.json())
}