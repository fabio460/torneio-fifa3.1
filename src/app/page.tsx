import Image from 'next/image'
import ButtomSignOut from './ButtomSignOut'
import Link from 'next/link'
import {useRouter} from 'next/navigation';
import { Button } from "@mui/material";

export default function Home() {
  const router = useRouter()

  const routerClick = ()=>{
    router.push('/TelaDeElenco')
  }
  return (
    <div>

      homes
      <ButtomSignOut/>
      <Button onClick={routerClick}>Elencos</Button>
    </div>
  )
}
