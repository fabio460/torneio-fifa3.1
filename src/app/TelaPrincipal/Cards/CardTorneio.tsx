
import styled from "../telaPrincipalStyle.module.css"
import ListaDeParticipantes from "../ListaDeParticipantes"
import SelectTorneio from "../SelectTorneio"
import ModalCriarParticipantes from "../Modais/ModalCriarParticipantes"
import ModalAdicionarParticipantes from "../Modais/modalAdicionarParticipantes"


export default function CardTorneio() {

  return (
    <div className={styled.cardTorneioMain}>
       <SelectTorneio/>
       <ModalCriarParticipantes/>
       <ListaDeParticipantes/>
       <ModalAdicionarParticipantes/>
    </div>
  )
}
