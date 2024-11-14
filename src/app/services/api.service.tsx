import {IUser} from "@/app/models/IUser";
import { IPost } from "../models/IPost";
import { IComment } from "../models/IComment";


export const getUsers= async (): Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then (value => value.json());
}

export const getUser= async (id: string): Promise<IUser>  => {
    return await fetch ('https://jsonplaceholder.typicode.com/users' + '/' + id)
        .then (value => value.json())
}

export const getPosts= async (): Promise<IPost[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then (value => value.json());
}

export const getPost= async (id: string): Promise<IPost>  => {
    return await fetch ('https://jsonplaceholder.typicode.com/posts' + '/' + id)
        .then (value => value.json())
}

export const getComments= async (): Promise<IComment[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/comments')
        .then (value => value.json());
}

export const getComment= async (id: string): Promise<IComment>  => {
    return await fetch ('https://jsonplaceholder.typicode.com/comments' + '/' + id)
        .then (value => value.json())
}