import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { participantesType, usuarioType } from '../../../Types';
import { useSelector } from 'react-redux';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { deletarParticipantesApi } from '@/APIs/participantesApi';
import { useAppSelector } from '@/redux/hookes';


export default function ModalDeletarParticipantes({elenco}:{elenco:participantesType}) {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [nomeDoParticipante, setNomeDoParticipante] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const btnDeletePartcipantesVisible = useAppSelector(state=>state.btnVisibleDeleteParticipantesReducer.btnDeleteVisible)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletarParticipantes = async()=>{
    const res = await deletarParticipantesApi(elenco.id)
    alert(res)
    window.location.reload()
   
  }
  
  return (
    <div>
      <IconButton  size='small' onClick={handleClickOpen} disabled={!btnDeletePartcipantesVisible}>
        <DeleteOutlineIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Tem certeza que quer deletar ${elenco.nome}?`}
        </DialogTitle>
        <DialogContent>
    
        </DialogContent>
        <DialogActions>
          <Button onClick={deletarParticipantes}>deletar</Button>
          <Button color='error' onClick={handleClose} autoFocus>
            cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
