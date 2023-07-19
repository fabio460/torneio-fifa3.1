import { Card, Checkbox } from "@mui/material"
import { ListaDeParticipantesDoTorneioSelecionado } from "../services"
import styled from "./telaPrincipalStyle.module.css"
import ListaDeParticipantes from "./ListaDeParticipantes"
import SelectTorneio from "./SelectTorneio"
import ModalCriarParticipantes from "./ModalCriarParticipantes"


export default function CardTorneio() {

  return (
    <div className={styled.cardTorneioMain}>
       <SelectTorneio/>
       <ModalCriarParticipantes/>
       <ListaDeParticipantes/>
    </div>
  )
}
