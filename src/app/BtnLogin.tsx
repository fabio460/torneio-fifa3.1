import { useSession, signIn, signOut } from "next-auth/react"

export default function BtnLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sair</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Entrar</button>
    </>
  )
}