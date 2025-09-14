"use client"

import { useState } from "react";

import Loader from "../Loader/Loader";
import { signOut } from "next-auth/react";

export default function LogoutButton() {

    const [isLoading, setIsLoading] = useState(false)

    const logOut = () => {
        setIsLoading(prev => !prev)
        signOut({redirect: true, redirectTo: "/"})
    }

    return (
        <button
            className="cms-page__aside-logout-btn" 
            disabled={isLoading} 
            onClick={logOut}
        >
            {isLoading 
                ? <Loader type={"logout"}/>
                : <img src="/img/AdminPage/logout-icon.svg" alt="Logout" />
            }
            <span>Выход</span>
        </button>
    )
}