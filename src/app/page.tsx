
import {getServerSession } from 'next-auth/next'
import TelaPrincipal from './TelaPrincipal'
import { getUserByEmail } from '@/APIs/usuariosApi'
import { usuarioType } from '@/Types'
export default async function Home() {
  const data =await getServerSession()
  const usuario = await getUserByEmail(data?.user?.email as string)
  
  return (
    <div>
      <TelaPrincipal usuario={usuario}/>
    </div>
  )
}
