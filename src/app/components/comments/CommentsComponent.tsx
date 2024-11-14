import { IComment } from '@/app/models/IComment';
import Link from 'next/link';
import React, { FC } from 'react';

type CommentsType = {comments: IComment[]}
const CommentsComponent :FC<CommentsType> = ({comments}) => {

    return (
        <div>
            {
                comments.map((comment:IComment) => <div key={comment.id}>
                    <Link href={'/comments/' + comment.id}>{comment.id} {comment.name}</Link>

                </div>)
            }
        </div>
    );
};

export default CommentsComponent;