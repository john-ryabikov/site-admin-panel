"use client"

import { useFormStatus } from "react-dom"

import Loader from "@/app/admin-panel/_components/Loader/Loader"

export default function LogInButton() {

    const { pending } = useFormStatus()
    
    return (
        <button 
            className={pending ? "login-page__btn-signin_disabled" : "login-page__btn-signin"}  
            type="submit"
            disabled={pending}
        >
            {!pending 
                ? <img src="/img/LoginPage/SignIn-icon.svg" alt="Login" />
                : <Loader type={"login"}/>
            }
            <span>Вход</span>
        </button>
    )
}
