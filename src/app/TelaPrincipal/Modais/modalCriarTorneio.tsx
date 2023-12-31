import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { usuarioType } from '@/Types';
import { criarTorneioApi } from '@/APIs/torneioApi';

export default function ModalCriarTorneio() {
  const [open, setOpen] = React.useState(false);
  const usuario:usuarioType = useSelector((state:any)=>state.usuarioReducer.usuario)
  const [nomeDoTorneio, setNomeDoTorneio] = useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const adicionarTorneio = async()=>{
    if (nomeDoTorneio.trim() === "") {
      alert("Este campo não pode ser nulo!")
      return null
    }
     const res = await criarTorneioApi(nomeDoTorneio, usuario?.id)
     alert(res)
     handleClose()
     window.location.reload()
  }
 
  return (
    <div>
      <Button size='small' color='success' sx={{width:"100%"}} variant="contained" onClick={handleClickOpen}>
        Criar 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Qual o nome do torneio?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField id="outlined-basic" label="nome" variant="outlined" size='small' sx={{margin:3}}
              onChange={e => setNomeDoTorneio(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={adicionarTorneio}>Criar</Button>
          <Button color='error' onClick={handleClose} autoFocus>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
