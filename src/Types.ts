export interface jogadoresType{
    id?:string,
    nome: string,
    imagemDoJogador: string,
    nacionalidade?: string,
    imagemDaNacionalidade: string,
    escudoDoTime: string,
    posicao: string,
    overall: string,
    valorDoJogador?: string,
    time: string,
    liga: string,
    linkSoFifa:string,
    posicaoNoCampinho?:posicaoNoCampinhoType[]
    participante?:participantesType
}

export type participantesType = {
   id: string,
   jogadores:jogadoresType[],
   nome: string,
   saldo: number,
   time: string,
   idTorneio: string,
   torneio: torneioType,
   emblemaDoTime?: string
}

export interface torneioType {
    id: string,
    idDoUsuario:string,
    nome:string,
    participantes:participantesType[]
 }

 export type usuarioType = {
    id:string,
    email:string,
    nome:string,
    torneio:torneioType[]
 }
 export type checkedTypes = {
   participante:participantesType,
   checked:boolean
 }
 export type selecionadosType={
    primeiro:{
      nome:string,
      dados:participantesType,
      dadosDaApi?:dadosPremiacoesDaApiType
    },
    segundo:{
      nome:string,
      dados:participantesType,
      dadosDaApi?:dadosPremiacoesDaApiType
    },
    terceiro:{
      nome:string,
      dados:participantesType,
      dadosDaApi?:dadosPremiacoesDaApiType
    },
    quarto:{
      nome:string,
      dados:participantesType,
      dadosDaApi?:dadosPremiacoesDaApiType
    }
 }

 export type posicaoNoCampinhoType = {
   idJogador:string,
   x:number,
   y:number
 }

 export type checkedType = {
  jogador: jogadoresType,
  selecionado:boolean
}

export type premiadosType = {
  idParticipante:string,
  premio:number
}[]

export type pagadoresType = {
  pagadores:[
    {
      idParticipante:string
    }
  ],
  id:string
}

export type dadosPremiacoesDaApiType = {
  idParticipante:string,
  premio:number,nome?:string
}

export type statisticasTypes = {
  id?:string,
  artilheiros:string[],
  data:Date,
  assistentes:string[],
  vencedor:string
}
export type timesType = {
  label:string,
  escudo:string
}

export type dadosDoJogoType = {
  dadosDoJogo:{
     gols:{
      idParticipante:string, 
      premio:number,
      dado?:number,
      tipoDeDado?:string,
      participante?:string
     },
     empates:{
      idParticipante:string, 
      premio:number,
      dado?:number,
      tipoDeDado?:string,
      participante?:string
     },
     vitorias:{
      idParticipante:string, 
      premio:number,
      dado?:number,
      tipoDeDado?:string,
      participante?:string
     }

   }
}

export type loginType = {
  auth:usuarioType,
  token:string
}
