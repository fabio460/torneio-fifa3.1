import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '@/redux/hookes';
import { setIdTorneio } from '@/redux/reducers/torneioSelecionadoReducer';

export default function SelectTorneio() {
  const [idSelecionado, setidSelecionado] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);
  const usuario = useAppSelector(state=>state.usuarioReducer.usuario)  
  const handleChange = (event: SelectChangeEvent<typeof idSelecionado>) => {
    setidSelecionado(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useAppDispatch()
  React.useEffect(()=>{
    setidSelecionado(localStorage.getItem("idTorneioSelecionado") as string)
  },[])
  React.useEffect(()=>{
      dispatch(setIdTorneio(idSelecionado))
      localStorage.setItem("idTorneioSelecionado",idSelecionado)
},[idSelecionado])
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id="demo-controlled-open-select-label">Torneio</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={idSelecionado}
          label="Torneio"
          onChange={handleChange}
        >
         {
            usuario?.torneio.map((e, key)=>{
                return <MenuItem key={key} value={e.id}>{e.nome}</MenuItem>
            })
         }
        </Select>
      </FormControl>
    </div>
  );
}
