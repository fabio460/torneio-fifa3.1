
import { loginApi } from "@/APIs/authApi"
import { loginType } from "@/Types"

export async function signIn(email:string, senha:string){
   const res:loginType = await loginApi(email, senha)
   localStorage.setItem("jwt",res.token)
   return res   
}

export async function signOut(){
   localStorage.removeItem("jwt")
   window.location.reload() 
}