import React from 'react'
import CardParticipantes from './CardParticipantes'
import CardTorneio from './CardTorneio'
import CardPremiacao from './CardPremiacao'
import style from './telaPrincipalStyle.module.css'
export default function Main() {
  return (
    <div>
      <div className={style.mainUp}>
        <CardTorneio />
        <CardPremiacao/> 
      </div>
        <CardParticipantes/>
    </div>
  )
}
