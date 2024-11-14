import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Post Info",
    description: "Generated information about the selected post",
};
type Props = {children: React.ReactNode}
const PostLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default PostLayout;