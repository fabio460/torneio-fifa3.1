"use client"
import {useSession} from 'next-auth/react'
import TelaPrincipal from './TelaPrincipal'
export default function Home() {
  return (
    <div>
      <TelaPrincipal/>
    </div>
  )
}
