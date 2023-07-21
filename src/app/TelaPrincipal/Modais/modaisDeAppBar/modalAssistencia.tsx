import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux/es/exports';
import { jogadoresType } from '@/Types';
import Primeiro from './selectsAssistecias/primeiro';
import Segundo from './selectsAssistecias/segundo';
import Terceiro from './selectsAssistecias/terceiro';
import Quarto from './selectsAssistecias/quarto';
import { useAppDispatch, useAppSelector } from '@/redux/hookes';
import { setAssistente } from '@/redux/reducers/assistentesReducer';


export default function ModalAssistencia() {
  const [open, setOpen] = React.useState(false);
  const [primeiro, setPrimeiro] = React.useState<jogadoresType[]>([]);
  const [segundo, setSegundo] = React.useState<jogadoresType[]>([]);
  const [terceiro, setTerceiro] = React.useState<jogadoresType[]>([]);
  const [quarto, setQuarto] = React.useState<jogadoresType[]>([]);
  const participantes = useAppSelector(state=>state.participantesCheckedReducer.paticipantesChecked)
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const dispatch = useAppDispatch()
  const handleClose = () => {
    setOpen(false);
    dispatch(setAssistente({
      primeiro:primeiro,
      segundo:segundo,
      terceiro:terceiro,
      quarto:quarto
    }))
    
  };

  const dialogStyle = {
    minWidth:"600px",
    "@media (max-width:800px)":{
      minWidth:"80vw"
    }
  }


  return (
    <div>
      <div onClick={handleClickOpen}>
        Assisência
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Quem deu mais assisência
        </DialogTitle>
        <DialogContent className='modalColocacaoFormsContainer'  sx={dialogStyle}>
          <DialogContentText id="alert-dialog-description">            
            <Primeiro 
              participantes={participantes}
              setPrimeiro={setPrimeiro}  
            />
            <Segundo 
              participantes={participantes}
              setSegundo={setSegundo}  
            />
            <Terceiro
              participantes={participantes}
              setTerceiro={setTerceiro}
            />
            <Quarto
              participantes={participantes}
              setQuarto={setQuarto}
            />
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
