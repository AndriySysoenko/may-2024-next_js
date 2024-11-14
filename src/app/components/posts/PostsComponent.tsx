import { IPost } from '@/app/models/IPost';
import Link from 'next/link';
import React, { FC } from 'react';

type UsersType = {posts: IPost[]}
const PostsComponent :FC<UsersType> = ({posts}) => {

    return (
        <div>
            {
                posts.map((post:IPost) => <div key={post.id}>
                    <Link href={'/posts/' + post.id}>{post.id} {post.title}</Link>

                </div>)
            }
        </div>
    );
};

export default PostsComponent;