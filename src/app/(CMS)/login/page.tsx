import { auth, signIn } from "@/utils/auth";
import { redirect } from "next/navigation";

import LogInButton from "./_components/LoginButton/LogInButton";

import "./login.scss";

export default async function AdminPanelLoginPage() {

    const session = await auth()

    session && redirect("/admin-panel")

    const sendForm = async (data: FormData) => {
        "use server"
        if (data.get("login") === "" && data.get("password")) {
            alert("Введите данные!")
            return
        }
        await signIn("credentials", data)
    }
    
    return (
        <main className="login-page">
            <form className="login-page__form" action={sendForm}>
                {/*Заголовок*/}
                <div className="login-page__title">
                    <img className="login-page__title-logo" src="/img/Logo/Logo-icon-Photoroom.png" alt="Logo"/>
                    <div className="login-page__title-line"></div>
                    <h1 className="login-page__title-h1">Панель управления</h1>
                </div>

                {/*Инпуты*/}
                <div className="login-page__inputs">
                    <input 
                        type="text" 
                        placeholder="Введите логин" 
                        required
                        name="login"
                    />
                    <input 
                        type="password" 
                        placeholder="Введите пароль" 
                        required
                        name="password"
                    />
                </div>

                {/*Кнопка для входа*/}
                <LogInButton/>
            </form>
        </main>
    )
}