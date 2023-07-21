import React from 'react'
import styled from "../telaPrincipalStyle.module.css"
import { useAppSelector } from '@/redux/hookes'
import ModalConfirmarPagamentoPremiacao from '../Modais/modalConfirmarPagPrem'
import ModalConfirmaPagamentoFolha from '../Modais/modalConfirPagFolha'
import ScrollComponents from '@/app/ScrollComponent'
import BtnScroll from '../btnScroll'

export default function CardPremiacao() {
  const participantes = useAppSelector(state=>state.participantesCheckedReducer.paticipantesChecked)
  const campeoes = useAppSelector(state=>state.colocaçãoReducer.colocacao)
  const artilheiros = useAppSelector(state=>state.artilheirosReducer.artilheiros)
  const assistentes = useAppSelector(state=>state.assistentesReducer.assistente)
  const dados = useAppSelector(state=>state.golsEmpVitoriasReducer.golsEmpVitorias)
  return (
    <div className={styled.cardTorneioMain}>
      <div>

        <h2 style={{textAlign:"center"}}>Premiações</h2>
        <div>
          Campeão {campeoes?.primeiro?.nome}
        </div>
        <div>
          Segundo  {campeoes?.segundo?.nome}
        </div>
        <div>
          Terceiro  {campeoes?.terceiro?.nome}
        </div>
        <div>
          Quarto  {campeoes?.quarto?.nome}
        </div>
        <h2>Artilheiros</h2>
        {
          artilheiros?.primeiro.map((a, key)=>{
            return <div key={key}>
              artilheiro {a.jogador.nome} part {a.participante.participante.nome}
            </div>
          })
        }
              {
          artilheiros?.segundo.map((a, key)=>{
            return <div  key={key}>
            vice artilheiro {a.jogador.nome} part {a.participante.participante.nome}
            </div>
          })
        }

      <h2>Assistentes</h2>
        {
          assistentes?.primeiro.map((a, key)=>{
            return <div  key={key}>
              assistentes {a.jogador.nome} part {a.participante.participante.nome}
            </div>
          })
        }
              {
          assistentes?.segundo.map((a, key)=>{
            return <div  key={key}>
            vice assistentes {a.jogador.nome} part {a.participante.participante.nome}
            </div>
          })
        }
      </div>
      <div>
        <ModalConfirmarPagamentoPremiacao icone={false}/>
        <ModalConfirmaPagamentoFolha icone={false}/>
      </div>
        <ScrollComponents >
          <BtnScroll/>
        </ScrollComponents>
    </div>
  )
}
