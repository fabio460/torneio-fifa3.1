import { torneioType } from "@/Types"
import { useAppSelector } from "@/redux/hookes"

export const ListaDeParticipantesDoTorneioSelecionado = ()=>{
    const usuario = useAppSelector(state=>state.usuarioReducer.usuario)  
    const idTorneioSelecionado = useAppSelector(state=>state.torneioSelecionadoReducer.idTorneioSelecionado)
    const list = usuario?.torneio.filter((e)=>{
        if (!idTorneioSelecionado) {
            return null
        }
        if (e.id === idTorneioSelecionado) {
            return e
        }
    })
    let lista:torneioType[] | undefined = list
    return lista && lista[0]?.participantes
}

export const getParticipantes = (id:string)=>{
    const torneio = ListaDeParticipantesDoTorneioSelecionado()
    return torneio?.map(e=>{
        if (!id) {
            return null
        }
        if (e.id === id) {
            return e
        }
    })
}