import React from 'react'
import styled from "../telaPrincipalStyle.module.css"
import { useAppSelector } from '@/redux/hookes'

export default function CardPremiacao() {
  const campeoes = useAppSelector(state=>state.colocaçãoReducer.colocacao)
  const artilheiros = useAppSelector(state=>state.artilheirosReducer.artilheiros)
  const assistentes = useAppSelector(state=>state.assistentesReducer.assistente)

  return (
    <div className={styled.cardTorneioMain}>
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
  )
}
