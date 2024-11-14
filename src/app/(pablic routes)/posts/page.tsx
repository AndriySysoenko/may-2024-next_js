import PostsComponent from '@/app/components/posts/PostsComponent';
import { getPosts } from '@/app/services/api.service';
import React from 'react';

const PostsPage = async () => {
    const posts = await getPosts();

    return (
        <div>
            {
                <PostsComponent posts={posts}/>
            }
        </div>
    );
};

export default PostsPage;