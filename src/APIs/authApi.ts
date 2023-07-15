import { linkLocal } from "./link"



export const autozidacaoApi = async()=>{
    var jwt = localStorage.getItem('jwt')
    var resp = "loading"
    resp = await fetch(linkLocal+"autenticacao/verificarLogadoReticiado",{
        headers:{
            "Content-Type":"application/json",
            "x-access-token":jwt as string
        }
    })
    .then(res=>res.json())
    return resp                
}

export const loginApi = async(email:string, senha:string)=>{
    const f = await fetch(linkLocal+"autenticacao/logar",{
        headers:{
            "Content-Type":"application/json",
        },
        method:"post",
        body:JSON.stringify({
            email,senha
        })
    })
    .then(res=>res.json())
    return f
}