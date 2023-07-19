"use client"
import {useSession} from 'next-auth/react'
import BtnLogin from './BtnLogin'
export default function Home() {
  const {data,update} = useSession()
  return (
    <div>
       <div>
         Usuario {data?.user?.name} logado 
       </div>
       
      <BtnLogin/>
    </div>
  )
}
