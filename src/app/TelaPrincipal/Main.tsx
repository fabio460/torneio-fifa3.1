import React from 'react'
import CardParticipantes from './Cards/CardParticipantes'
import CardTorneio from './Cards/CardTorneio'
import CardPremiacao from './Cards/CardPremiacao'
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
