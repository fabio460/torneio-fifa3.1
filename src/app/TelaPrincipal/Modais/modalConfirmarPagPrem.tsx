import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { premiadosType } from '../../../Types';
import CarregandoBtn from '../../../carregandoBtn';
import { pagarPremiacoesApi } from '@/APIs/pagamentosApi';
import { useAppSelector } from '@/redux/hookes';

export default function ModalConfirmarPagamentoPremiacao({icone}:{icone:boolean}) {

  const [open, setOpen] = React.useState(false);
  const [carregandoPremio, setCarregandoPremio] = React.useState(false)
  const colocacao = useAppSelector(state=>state.colocaçãoReducer.colocacao)
  const artilheiros = useAppSelector(state=>state.artilheirosReducer.artilheiros)
  const assistentes = useAppSelector(state=>state.assistentesReducer.assistente)
  const dadosDoJogo = useAppSelector(state=>state.golsEmpVitoriasReducer.golsEmpVitorias)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  let premiados:premiadosType = []
  colocacao?.primeiro?.dadosDaApi && premiados.push(colocacao?.primeiro?.dadosDaApi)
  colocacao?.segundo?.dadosDaApi && premiados.push(colocacao?.segundo?.dadosDaApi)
  colocacao?.terceiro?.dadosDaApi && premiados.push(colocacao?.terceiro?.dadosDaApi)
  colocacao?.quarto?.dadosDaApi && premiados.push(colocacao?.quarto?.dadosDaApi)
  artilheiros?.primeiro.map(a=>{
    a?.dadosDaApi && premiados.push(a?.dadosDaApi)
  })
  artilheiros?.segundo?.map(a=>{
    a?.dadosDaApi && premiados.push(a?.dadosDaApi)
  })
  artilheiros?.terceiro?.map(a=>{
    a?.dadosDaApi && premiados.push(a?.dadosDaApi)
  })
  artilheiros?.quarto?.map(a=>{
    a?.dadosDaApi && premiados.push(a?.dadosDaApi)
  })
  assistentes?.primeiro.map(a=>{
    a?.dadosDaApi && premiados.push(a?.dadosDaApi)
  })
  assistentes?.segundo?.map(a=>{
    a?.dadosDaApi && premiados.push(a?.dadosDaApi)
  })
  assistentes?.terceiro?.map(a=>{
    a?.dadosDaApi && premiados.push(a?.dadosDaApi)
  })
  assistentes?.quarto?.map(a=>{
    a?.dadosDaApi && premiados.push(a?.dadosDaApi)
  })
  dadosDoJogo?.gols.map(g=>{
   g?.dadosDaApi && premiados.push(g?.dadosDaApi)
  })
  dadosDoJogo?.empates.map(g=>{
   g?.dadosDaApi && premiados.push(g?.dadosDaApi)
  })
  dadosDoJogo?.vitorias.map(g=>{
   g?.dadosDaApi && premiados.push(g?.dadosDaApi)
  })
  const pagarPremiacao =async ()=>{
    setCarregandoPremio(true)

     const res =await pagarPremiacoesApi(premiados)
     alert(res)
     window.location.reload()
     if (artilheiros?.primeiro || assistentes?.primeiro || colocacao?.primeiro) {     
      //  const resSta = await adicionarEstatisticaApi(
      //   artilheirosArray,
      //   assistentesArray,
      //   colocacao.primeiro ? colocacao.primeiro.nome: "",
      //   usuario?.torneio[torneioReducer].id || ''
      //   )
     }else{
      alert("Não há participantes selecionados!")
      setCarregandoPremio(false)
     }
    setCarregandoPremio(false)

  }

  const btnPagamentosStyle ={
    marginRight:"10px",
    width:"100%",
    "@media (max-width:800px)":{
      marginRight:"0px",
    }
  }
  return (
    <div>
     {
      icone ? <div onClick={handleClickOpen}>
        pp
      </div>:
        <Button 
           sx={btnPagamentosStyle} 
           color='success' size="small" variant='contained'
           onClick={handleClickOpen}
           disabled={premiados.length === 0 ? true : false}
        >Pagar premiação</Button>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Pagamento das premiações"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Voçê esta prestes a fazer o pagamento das premiações dos participantes selecionados,
            clique em confirmar, lembrando que esta ação não poderá ser revertida!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            {
             carregandoPremio ? 
             <Button  color='success' size="small" variant='contained' ><CarregandoBtn /></Button>:
             <Button  color='success' size="small" variant='contained' onClick={pagarPremiacao}>confirmar</Button>
            }
          <Button onClick={handleClose} autoFocus color='error' size="small" variant='outlined' >
            cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
