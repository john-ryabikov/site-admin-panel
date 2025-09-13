import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, auth } = NextAuth({ 
    providers: [ 
        Credentials({
            credentials: {
                login: {},
                password: {},
            },
            authorize: async (credentials) => {

                const user = {name: "admin", password: "1234"}

                if (credentials?.login === user.name && credentials?.password === user.password) {
                    return user
                }
                else {
                    return null
                }
            }
        }) 
    ],
    session: { strategy: "jwt"}
})