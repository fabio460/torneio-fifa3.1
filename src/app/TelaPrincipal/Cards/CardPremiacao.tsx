import React from 'react'
import styled from "../telaPrincipalStyle.module.css"
import { useAppSelector } from '@/redux/hookes'

export default function CardPremiacao() {
  const selecionados = useAppSelector(state=>state.participantesCheckedReducer.paticipantesChecked)
  return (
    <div className={styled.cardTorneioMain}>
      CardPremiacao
      {
        selecionados.map((elem, key)=>{
          return <div key={key}>{elem.participante.nome}</div>
        })
      }
    </div>
  )
}
