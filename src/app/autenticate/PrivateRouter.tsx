'use client'
import { autozidacaoApi } from '@/APIs/authApi'
import React,{ReactNode, useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';
import { loginType } from '@/Types';
import TelaDeLogin from '../TelaDeLogin/page';

type childrenType={
    children:ReactNode
}
export default function PrivateRouter({children}:childrenType) {
  const router = useRouter()
  const [logado, setlogado] = useState<loginType>()
  const [loading, setloading] = useState(true)
  async function HandleLogin() {
      const auth:any =await autozidacaoApi()
      setlogado(auth)
      setloading(false)
  }

  useEffect(()=>{
    HandleLogin()
  },[router,loading])

  if (loading) {
    return <div>carregando... </div>
  }else{
    if (localStorage.getItem('jwt')) {
      return <div>{children}</div>
    }else{
      router.push("/TelaDeLogin")
      return <div></div>
    }
  }
}
