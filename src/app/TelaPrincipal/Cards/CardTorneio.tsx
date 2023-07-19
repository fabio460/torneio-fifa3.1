
import styled from "../telaPrincipalStyle.module.css"
import ListaDeParticipantes from "../ListaDeParticipantes"
import SelectTorneio from "../SelectTorneio"
import ModalCriarParticipantes from "../Modais/ModalCriarParticipantes"
import ModalAdicionarParticipantes from "../Modais/modalAdicionarParticipantes"
import ModalCriarTorneio from "../Modais/modalCriarTorneio"
import ModalAtualizarTorneio from "../Modais/modalAtualizarTorneio"


export default function CardTorneio() {

  return (
    <div className={styled.cardTorneioMain}>
       <SelectTorneio/>
       <ModalCriarParticipantes/>
       <ListaDeParticipantes/>
       <ModalAdicionarParticipantes/>
       <ModalCriarTorneio/>
       
    </div>
  )
}
