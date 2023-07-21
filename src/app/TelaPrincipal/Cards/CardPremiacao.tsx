import React from 'react'
import Styled from "../telaPrincipalStyle.module.css"
import { useAppSelector } from '@/redux/hookes'
import ModalConfirmarPagamentoPremiacao from '../Modais/modalConfirmarPagPrem'
import ModalConfirmaPagamentoFolha from '../Modais/modalConfirPagFolha'
import ScrollComponents from '@/app/ScrollComponent'
import BtnScroll from '../btnScroll'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Image from 'next/image'
export default function CardPremiacao() {
  const participantes = useAppSelector(state=>state.participantesCheckedReducer.paticipantesChecked)
  const colocacao = useAppSelector(state=>state.colocaçãoReducer.colocacao)
  const artilheiros = useAppSelector(state=>state.artilheirosReducer.artilheiros)
  const assistentes = useAppSelector(state=>state.assistentesReducer.assistente)
  const dados = useAppSelector(state=>state.golsEmpVitoriasReducer.golsEmpVitorias)

  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <div className={Styled.cardTorneioMain}>
      <div>
        <h1 className={Styled.titlePremiacoes}>Premiações</h1>
        {
          colocacao?.primeiro?.nome && 
          <div>
            <div>Campeão</div>
            <div>
              <div className="flex gap-x-4 ml-6 mt-1 mb-4">
                1° <Image className="h-7 w-7 flex-none rounded-full bg-gray-50" 
                 src={colocacao.primeiro.dados.emblemaDoTime as string} alt="" />
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
        <Divider/>
        {
          colocacao?.segundo?.nome && 
          <div>
            <div>Vice campeão</div>
            <div>
              <div className="flex gap-x-4 ml-6 mt-1 mb-4">
                2° <Image className="h-7 w-7 flex-none rounded-full bg-gray-50" 
                 src={colocacao.segundo.dados.emblemaDoTime as string} alt="" />
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
         <Divider/>
        {
          colocacao?.terceiro?.nome && 
          <div>
            <div>Terceiro colocado</div>
            <div>
              <div className="flex gap-x-4 ml-6 mt-1 mb-4">
                3° <Image className="h-7 w-7 flex-none rounded-full bg-gray-50" 
                 src={colocacao.terceiro.dados.emblemaDoTime  as string} alt="" />
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
         <Divider/>
        {
          colocacao?.quarto?.nome && 
          <div>
            <div>Quarto colocado</div>
            <div>
              <div className="flex gap-x-4 ml-6 mt-1 mb-4">
                4° <Image className="h-7 w-7 flex-none rounded-full bg-gray-50" 
                 src={colocacao.quarto.dados.emblemaDoTime as string} alt="" />
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
         
        {
          artilheiros?.primeiro[0] && 
          <div>
             Artilheiro(s)
             <div style={{display:"flex", margin:"0px 10px 10px 10px",flexWrap:"wrap"}}>
              {
                artilheiros.primeiro.map((elem, key)=>{
                  return <div key={key} style={{margin:"10px", }}>
                    <Stack direction="row" spacing={2} >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                          <SmallAvatar alt="Remy Sharp" src={elem.participante.participante.emblemaDoTime as string} />
                        }
                      >
                        <Avatar alt="Travis Howard" src={elem.jogador.imagemDoJogador as string} />
                      </Badge>
                      <div className="min-w-0 flex-auto">
                        <div className="text-sm font-semibold leading-3 text-gray-900">
                          {elem.participante.participante.nome}
                        </div>
                        <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                          {elem.jogador.nome}
                        </div>
                      </div>
                    </Stack>
                  </div>
                })
              }
             </div>
          </div>
        }
        <Divider/>
        {
          artilheiros?.segundo[0] && 
          <div>
             Vice-Artilheiro(s)
             <div style={{display:"flex", margin:"0px 10px 10px 10px",flexWrap:"wrap"}}>
              {
                artilheiros.segundo.map((elem, key)=>{
                  return <div key={key} style={{margin:"10px", }}>
                    <Stack direction="row" spacing={2} >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                          <SmallAvatar alt="Remy Sharp" src={elem.participante.participante.emblemaDoTime as string} />
                        }
                      >
                        <Avatar alt="Travis Howard" src={elem.jogador.imagemDoJogador as string} />
                      </Badge>
                      <div className="min-w-0 flex-auto">
                        <div className="text-sm font-semibold leading-3 text-gray-900">
                          {elem.participante.participante.nome}
                        </div>
                        <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                          {elem.jogador.nome}
                        </div>
                      </div>
                    </Stack>
                  </div>
                })
              }
             </div>
          </div>
        }
        <Divider/>
        {
          artilheiros?.terceiro[0] && 
          <div>
             Terceiro Artilheiro(s)
             <div style={{display:"flex", margin:"0px 10px 10px 10px",flexWrap:"wrap"}}>
              {
                artilheiros.terceiro.map((elem, key)=>{
                  return <div key={key} style={{margin:"10px", }}>
                    <Stack direction="row" spacing={2} >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                          <SmallAvatar alt="Remy Sharp" src={elem.participante.participante.emblemaDoTime as string} />
                        }
                      >
                        <Avatar alt="Travis Howard" src={elem.jogador.imagemDoJogador as string} />
                      </Badge>
                      <div className="min-w-0 flex-auto">
                        <div className="text-sm font-semibold leading-3 text-gray-900">
                          {elem.participante.participante.nome}
                        </div>
                        <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                          {elem.jogador.nome}
                        </div>
                      </div>
                    </Stack>
                  </div>
                })
              }
             </div>
          </div>
        }
        <Divider/>
        {
          assistentes?.primeiro[0] && 
          <div>
             Assistente(s)
             <div style={{display:"flex", margin:"0px 10px 10px 10px",flexWrap:"wrap"}}>
              {
                assistentes.primeiro.map((elem, key)=>{
                  return <div key={key} style={{margin:"10px", }}>
                    <Stack direction="row" spacing={2} >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                          <SmallAvatar alt="Remy Sharp" src={elem.participante.participante.emblemaDoTime as string} />
                        }
                      >
                        <Avatar alt="Travis Howard" src={elem.jogador.imagemDoJogador as string} />
                      </Badge>
                      <div className="min-w-0 flex-auto">
                        <div className="text-sm font-semibold leading-3 text-gray-900">
                          {elem.participante.participante.nome}
                        </div>
                        <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                          {elem.jogador.nome}
                        </div>
                      </div>
                    </Stack>
                  </div>
                })
              }
             </div>
          </div>
        }
        <Divider/>
        {
          assistentes?.segundo[0] && 
          <div>
             Segundo Assistente(s)
             <div style={{display:"flex", margin:"0px 10px 10px 10px",flexWrap:"wrap"}}>
              {
                assistentes.segundo.map((elem, key)=>{
                  return <div key={key} style={{margin:"10px", }}>
                    <Stack direction="row" spacing={2} >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                          <SmallAvatar alt="Remy Sharp" src={elem.participante.participante.emblemaDoTime as string} />
                        }
                      >
                        <Avatar alt="Travis Howard" src={elem.jogador.imagemDoJogador as string} />
                      </Badge>
                      <div className="min-w-0 flex-auto">
                        <div className="text-sm font-semibold leading-3 text-gray-900">
                          {elem.participante.participante.nome}
                        </div>
                        <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                          {elem.jogador.nome}
                        </div>
                      </div>
                    </Stack>
                  </div>
                })
              }
             </div>
          </div>
        }
        <Divider/>
        {
          assistentes?.terceiro[0] && 
          <div>
             Terceiro Assistente(s)
             <div style={{display:"flex", margin:"0px 10px 10px 10px",flexWrap:"wrap"}}>
              {
                assistentes.terceiro.map((elem, key)=>{
                  return <div key={key} style={{margin:"10px", }}>
        
        
                    <Stack direction="row" spacing={2} >
                      <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                          <SmallAvatar alt="Remy Sharp" src={elem.participante.participante.emblemaDoTime as string} />
                        }
                      >
                        <Avatar alt="Travis Howard" src={elem.jogador.imagemDoJogador as string} />
                      </Badge>
                      <div className="min-w-0 flex-auto">
                        <div className="text-sm font-semibold leading-3 text-gray-900">
                          {elem.participante.participante.nome}
                        </div>
                        <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                          {elem.jogador.nome}
                        </div>
                      </div>
                    </Stack>
                  </div>
                })
              }
             </div>
          </div>
        }
        <Divider/>
        {
          dados?.vitorias && 
          <div>
             Vitórias
             <div style={{ margin:"0px 10px 10px 10px"}}>
              {
                dados?.vitorias?.map((elem, key)=>{
                  return (
                    <div>
                      {elem.participante} - {elem.dado} vitória{elem.dado && elem.dado > 1 && <span>s</span>}
                    </div>
                  )
                })
              }
             </div>
          </div>
        }
        <Divider/>
        {
          dados?.empates && 
          <div>
             Empates
             <div style={{ margin:"0px 10px 10px 10px"}}>
              {
                dados?.empates?.map((elem, key)=>{
                  return (
                    <div>
                      {elem.participante} - {elem.dado} empate{elem.dado && elem.dado > 1 && <span>s</span>}
                    </div>
                  )
                })
              }
             </div>
          </div>
        }
        <Divider/>
        {
          dados?.gols && 
          <div>
             Gols
             <div style={{display:"block", margin:"0px 10px 10px 10px"}}>
              {
                dados?.gols?.map((elem, key)=>{
                  return (
                    <div>
                      {elem.participante} - {elem.dado} gol{elem.dado && elem.dado > 1 && <span>s</span>}
                    </div>
                  )
                })
              }
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
