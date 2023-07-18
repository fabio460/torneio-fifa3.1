"use client"
import {useSession} from 'next-auth/react'
import BtnLogin from './BtnLogin'
export default function Home() {
  const {data} = useSession()
  return (
    <div>
      home 
      <BtnLogin/>
    </div>
  )
}
