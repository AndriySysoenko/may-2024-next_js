import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Comment Info",
    description: "Generated information about the selected comment",
};
type Props = {children: React.ReactNode}
const CommentLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default CommentLayout;