import CommentComponent from '@/app/components/comment/CommentComponent';
import { getComment } from '@/app/services/api.service';
import React from 'react';

type MyParams = {id:string}
const CommentPage = async ({params}:{params:MyParams}) => {
    const comment = await getComment(params.id)

    return (
        <div>
            <CommentComponent item={comment}/>
        </div>
    );
};

export default CommentPage;