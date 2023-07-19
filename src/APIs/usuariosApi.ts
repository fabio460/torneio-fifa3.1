import { linkLocal } from "./link"

export const getUserByEmail = async(email:string)=>{

    
    const resp = await fetch(linkLocal+"usuario/email",{
        headers:{
            "Content-Type":"application/json"
        },
        method:"post",
        body:JSON.stringify({
            email
        })
    })
    .then(res=>res.json())
    return resp                
}