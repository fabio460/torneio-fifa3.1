import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { checkedType, jogadoresType } from '@/Types';
import Primeiro from './selectsArtilheiros/primeiro';
import Segundo from './selectsArtilheiros/segundo';
import Terceiro from './selectsArtilheiros/terceiro';
import Quarto from './selectsArtilheiros/quarto';
import { useAppDispatch, useAppSelector } from '@/redux/hookes';
import { setArtilheiros } from '@/redux/reducers/artilheirosReducer';



export default function ModalArtilharia() {
  const [open, setOpen] = React.useState(false);
  const [primeiro, setPrimeiro] = React.useState<jogadoresType[]>([]);
  const [segundo, setSegundo] = React.useState<jogadoresType[]>([]);
  const [terceiro, setTerceiro] = React.useState<jogadoresType[]>([]);
  const [quarto, setQuarto] = React.useState<jogadoresType[]>([]);  
  const participantes= useAppSelector((state)=>state.participantesCheckedReducer.paticipantesChecked)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const dispatch = useAppDispatch()
  const handleClose = () => {
    setOpen(false);
    dispatch(setArtilheiros({
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
        Artilharia
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{background:"",width:"100%"}}
      >
        <DialogTitle id="alert-dialog-title">
          Escolha os artilheiros
        </DialogTitle>
        <DialogContent className='modalColocacaoFormsContainer' sx={dialogStyle} >
          <DialogContentText id="alert-dialog-description"  >            
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
