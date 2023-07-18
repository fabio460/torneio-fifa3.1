import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { loginApi } from "@/APIs/authApi";

export default NextAuth({
    providers: [
      process.env.VERCEL_ENV === "preview" ?
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
    
          if (user) {
            return user
          } else {
            return null
    
          }
        },
        
      }):
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const user = await loginApi(credentials?.username as string, credentials?.password as string)
          const usuario = {
            email:user.auth.email,
            name:user.auth.nome,
            id:user.auth.id
          }
          if (user.token) {
            return usuario
          } else {
            return null
          }
        },
      }),
    ],
    pages:{
      signIn:"/login"
    },
})
