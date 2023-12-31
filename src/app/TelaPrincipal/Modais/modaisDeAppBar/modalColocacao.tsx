import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { checkedType, checkedTypes, dadosPremiacoesDaApiType, participantesType } from '@/Types';
import { useAppDispatch, useAppSelector } from '@/redux/hookes';
import { campeao, quartoColocado, terceiroColocado, viceCampeao } from '../../../../../valoresDosPremios';
import { setColocacao } from '@/redux/reducers/colocaçãoReducer';

export default function ModalColocacao() {
  const [open, setOpen] = React.useState(false);
  const [primeiro, setPrimeiro] = React.useState<{nome:string, dados:participantesType,dadosDaApi:dadosPremiacoesDaApiType}>();
  const [segundo, setSegundo] = React.useState<{nome:string, dados:participantesType,dadosDaApi:dadosPremiacoesDaApiType}>();
  const [terceiro, setTerceiro] = React.useState<{nome:string, dados:participantesType,dadosDaApi:dadosPremiacoesDaApiType}>();
  const [quarto, setQuarto] = React.useState<{nome:string, dados:participantesType,dadosDaApi:dadosPremiacoesDaApiType}>();

  const participantes = useAppSelector(state=>state.participantesCheckedReducer.paticipantesChecked)
  
  const handleChangePrimeiro = (event: any, data:any) => {
    const idParticipante =  JSON.parse(data.props.nonce).id
    setPrimeiro({nome:event.target.value, dados:data.props.nonce && JSON.parse(data.props.nonce), dadosDaApi:{idParticipante:idParticipante,premio:campeao}})
  };
  const handleChangeSegundo = (event: any, data:any) => {
    const idParticipante =  JSON.parse(data.props.nonce).id
    setSegundo({nome:event.target.value, dados:data.props.nonce && JSON.parse(data.props.nonce), dadosDaApi:{idParticipante:idParticipante,premio:viceCampeao}});
  };
  const handleChangeTerceiro = (event: any, data:any) => {
    const idParticipante =  JSON.parse(data.props.nonce).id
    setTerceiro({nome:event.target.value, dados:data.props.nonce && JSON.parse(data.props.nonce), dadosDaApi:{idParticipante:idParticipante,premio:terceiroColocado}});
  };
  const handleChangeQuarto = (event: any, data:any) => {
    const idParticipante =  JSON.parse(data.props.nonce).id
    setQuarto({nome:event.target.value, dados:data.props.nonce && JSON.parse(data.props.nonce), dadosDaApi:{idParticipante:idParticipante,premio:quartoColocado}});
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const dispatch = useAppDispatch()
  const handleClose = () => {
    setOpen(false);
    dispatch(setColocacao({primeiro,segundo,terceiro,quarto}))
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        Colocação
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{background:"",width:"100%"}}
      >
        <DialogTitle id="alert-dialog-title">
          Colocação
        </DialogTitle>
        <DialogContent className='modalColocacaoFormsContainer' >
          <DialogContentText id="alert-dialog-description">
            
            <FormControl className='modalColocacaoForms' 
               sx={{margin:"9px 0", display:"flex", flexDirection:"column"}} size="small"
            >
              <InputLabel id="demo-select-small" >Primeiro lugar</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={primeiro?.nome}
                label="Primeiro lugar"
                onChange={handleChangePrimeiro}
              >
           
                {participantes?.map((elem,key)=>{
                  return <MenuItem key={key} value={elem.participante.nome} nonce={JSON.stringify(elem.participante)}>{elem.participante.nome}</MenuItem>
                })}
              </Select>
            </FormControl>

            <FormControl className='modalColocacaoForms' size="small" 
               sx={{marginBottom:1, display:"flex", flexDirection:"column"}}
            >
              <InputLabel id="demo-select-small">Segundo lugar</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={segundo?.nome}
                label="Segundo lugar"
                onChange={handleChangeSegundo}
              >
           
                {participantes?.map((elem,key)=>{
                  return <MenuItem key={key} nonce={JSON.stringify(elem.participante)} value={elem.participante.nome}>{elem.participante.nome}</MenuItem>
                })}
              </Select>
            </FormControl>

            <FormControl className='modalColocacaoForms' size="small"  
               sx={{marginBottom:1, display:"flex", flexDirection:"column"}}
            >
              <InputLabel id="demo-select-small" >Terceiro lugar</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={terceiro?.nome}
                label="Segundo lugar"
                onChange={handleChangeTerceiro}
              >
           
                {participantes?.map((elem,key)=>{
                  return <MenuItem key={key} nonce={JSON.stringify(elem.participante)} value={elem.participante.nome}>{elem.participante.nome}</MenuItem>
                })}
              </Select>
            </FormControl>
            <FormControl className='modalColocacaoForms' 
              size="small"
              sx={{display:"flex", flexDirection:"column"}}
            >
              <InputLabel id="demo-select-small" >Quarto lugar</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={quarto?.nome}
                label="Segundo lugar"
                onChange={handleChangeQuarto}
              >
           
                {participantes?.map((elem,key)=>{
                  return <MenuItem key={key} nonce={JSON.stringify(elem.participante)} value={elem.participante.nome}>{elem.participante.nome}</MenuItem>
                })}
              </Select>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirmar</Button>
          <Button color='error' onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
