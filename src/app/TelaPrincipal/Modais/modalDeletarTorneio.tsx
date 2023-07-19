import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { deletarTorneioApi } from '@/APIs/torneioApi';
import { useAppSelector } from '@/redux/hookes';

export default function ModalDeletarTorneio() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [nomeDoParticipante, setNomeDoParticipante] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const torneios = useAppSelector(state=>state.usuarioReducer.usuario?.torneio)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deletarTorneio = async()=>{
      const res = await deletarTorneioApi(age)
      alert(res)
      window.location.reload()
  }

  return (
    <div>
      <Button size='small' color='error' sx={{width:"100%"}} onClick={handleClickOpen} variant='contained'>
        Deletar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Deleção de torneio
        </DialogTitle>
        <DialogContent>
           Escolha o torneio a ser deletado
           <FormControl sx={{ m: '2% 0', width:'100%',height:'41px' }} size="small">
          <InputLabel id="demo-select-small-label" sx={{minWidth:"60px", background:"white", marginRight:'20px'}}>Torneio</InputLabel>
          <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
          >
              {
                torneios?.map((t, key)=>{
                   return  <MenuItem key={key} value={t.id} className={t.id}>{t.nome}</MenuItem>
                })
              }
          </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={deletarTorneio}>deletar</Button>
          <Button color='error' onClick={handleClose} autoFocus>
            cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
