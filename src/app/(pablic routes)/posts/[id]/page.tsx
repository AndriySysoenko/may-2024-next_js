import PostComponent from '@/app/components/post/PostComponent';
import { getPost } from '@/app/services/api.service';
import React from 'react';

type MyParams = {id:string}

const PostPage = async ({params}:{params: MyParams}) => {
    const post = await getPost(params.id)

    return (
        <div>
            <PostComponent item={post}/>
        </div>
    );
};

export default PostPage;