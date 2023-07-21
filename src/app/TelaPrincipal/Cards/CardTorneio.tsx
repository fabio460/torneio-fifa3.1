
import styled from "../telaPrincipalStyle.module.css"
import ListaDeParticipantes from "../ListaDeParticipantes"
import SelectTorneio from "../SelectTorneio"
import ModalAdicionarParticipantes from "../Modais/modalAdicionarParticipantes"
import ModalCriarTorneio from "../Modais/modalCriarTorneio"
import ModalAtualizarTorneio from "../Modais/modalAtualizarTorneio"
import ModalDeletarTorneio from "../Modais/modalDeletarTorneio"
import { Typography } from "@mui/material"


export default function CardTorneio() {

  return (
    <div className={styled.cardTorneioMain}>
       <SelectTorneio/>
       <ModalAdicionarParticipantes/>
       <ListaDeParticipantes/>
       <Typography sx={{fontSize:"20px",fontWeight:"bold",color:"gray", textAlign:"center"}}>Ações de torneio</Typography>
       <div style={{display:"grid", width:"100%",gridTemplateColumns:"1fr 1fr 1fr", gap:"2%"}}>
          <ModalCriarTorneio/>
          <ModalAtualizarTorneio/>
          <ModalDeletarTorneio/>
       </div>
    </div>
  )
}
