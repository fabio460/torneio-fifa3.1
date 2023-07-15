import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation';
import { Button } from "@mui/material";
export default function TelaDeElenco() {
  const router = useRouter()
  const routerClick = ()=>{
    router.push('/')
  }
  return (
    <div>
        elencos
        <Button onClick={routerClick}>Voltar</Button>
    </div>
  )
}
