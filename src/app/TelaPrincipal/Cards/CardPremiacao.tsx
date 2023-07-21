import React from 'react'
import styled from "../telaPrincipalStyle.module.css"
import { useAppSelector } from '@/redux/hookes'
import ModalConfirmarPagamentoPremiacao from '../Modais/modalConfirmarPagPrem'
import ModalConfirmaPagamentoFolha from '../Modais/modalConfirPagFolha'
import ScrollComponents from '@/app/ScrollComponent'
import BtnScroll from '../btnScroll'

export default function CardPremiacao() {
  const participantes = useAppSelector(state=>state.participantesCheckedReducer.paticipantesChecked)
  const colocacao = useAppSelector(state=>state.colocaçãoReducer.colocacao)
  const artilheiros = useAppSelector(state=>state.artilheirosReducer.artilheiros)
  const assistentes = useAppSelector(state=>state.assistentesReducer.assistente)
  const dados = useAppSelector(state=>state.golsEmpVitoriasReducer.golsEmpVitorias)
  return (
    <div className={styled.cardTorneioMain}>
      
      <div>
        <h1 className={styled.titlePremiacoes}>Premiações</h1>
        {
          colocacao?.primeiro?.nome && 
          <div>
            <div>Campeão</div>
            <div>
              <div className="flex gap-x-4 ml-6 mt-1 mb-4">
                1° <img className="h-7 w-7 flex-none rounded-full bg-gray-50" 
                 src={colocacao.primeiro.dados.emblemaDoTime} alt="" />
              <div className="min-w-0 flex-auto">
                <div className="text-sm font-semibold leading-3 text-gray-900">
                  {colocacao.primeiro.nome}
                </div>
                <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                  {colocacao.primeiro.dados.time}
                </div>
              </div>
            </div>
            </div>
          </div>
        }
        {
          colocacao?.segundo?.nome && 
          <div>
            <div>Vice campeão</div>
            <div>
              <div className="flex gap-x-4 ml-6 mt-1 mb-4">
                2° <img className="h-7 w-7 flex-none rounded-full bg-gray-50" 
                 src={colocacao.segundo.dados.emblemaDoTime} alt="" />
              <div className="min-w-0 flex-auto">
                <div className="text-sm font-semibold leading-3 text-gray-900">
                  {colocacao.segundo.nome}
                </div>
                <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                  {colocacao.segundo.dados.time}
                </div>
              </div>
            </div>
            </div>
          </div>
        }
       {
          colocacao?.terceiro?.nome && 
          <div>
            <div>Terceiro colocado</div>
            <div>
              <div className="flex gap-x-4 ml-6 mt-1 mb-4">
                3° <img className="h-7 w-7 flex-none rounded-full bg-gray-50" 
                 src={colocacao.terceiro.dados.emblemaDoTime} alt="" />
              <div className="min-w-0 flex-auto">
                <div className="text-sm font-semibold leading-3 text-gray-900">
                  {colocacao.terceiro.nome}
                </div>
                <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                  {colocacao.terceiro.dados.time}
                </div>
              </div>
            </div>
            </div>
          </div>
        }
       {
          colocacao?.quarto?.nome && 
          <div>
            <div>Quarto colocado</div>
            <div>
              <div className="flex gap-x-4 ml-6 mt-1 mb-4">
                4° <img className="h-7 w-7 flex-none rounded-full bg-gray-50" 
                 src={colocacao.quarto.dados.emblemaDoTime} alt="" />
              <div className="min-w-0 flex-auto">
                <div className="text-sm font-semibold leading-3 text-gray-900">
                  {colocacao.quarto.dados.time}
                </div>
                <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                  {colocacao.quarto.nome}
                </div>
              </div>
            </div>
            </div>
          </div>
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
