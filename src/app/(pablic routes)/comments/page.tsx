import CommentsComponent from '@/app/components/comments/CommentsComponent';
import { getComments } from '@/app/services/api.service';
import React from 'react';

const CommentsPage = async () => {
    const comments = await getComments();
    
    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;