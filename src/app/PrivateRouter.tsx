'use client'
import React, { ReactNode } from 'react'
import {SessionProvider, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Login from './login/page'
export default function PrivateRouter({children}:{children:ReactNode}) {
  const {status} = useSession()
  const router = useRouter()
  const GoLogin = ()=>{
    router.push("/")
    return <Login/>
  }
  if (status === "loading") {
    return <h3>carregando...</h3>
  }else{
    if (status === "unauthenticated") {
      return <GoLogin/>
    }else{
      return <div>{children}</div>
    }
  }
}

