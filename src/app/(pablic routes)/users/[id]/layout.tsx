import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "User Info",
    description: "Generated information about the selected user",
};
type Props = {children: React.ReactNode}
const UserLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default UserLayout;