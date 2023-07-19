import { Card, Checkbox } from "@mui/material"
import { listaDeParticipantesDoTorneioSelecionado } from "../services"
import styled from "./telaPrincipalStyle.module.css"
import ListaDeParticipantes from "./ListaDeParticipantes"
import SelectTorneio from "./SelectTorneio"


export default function CardTorneio() {

  return (
    <div className={styled.cardTorneioMain}>
       <SelectTorneio/>
       <ListaDeParticipantes/>
    </div>
  )
}
