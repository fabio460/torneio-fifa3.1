import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { useSelector } from 'react-redux';
import ModalConfirmaPagamentoFolha from './Modais/modalConfirPagFolha';
import ModalConfirmarPagamentoPremiacao from './Modais/modalConfirmarPagPrem';
import { useAppSelector } from '@/redux/hookes';


export default function BtnScroll() {
    const participantes = useAppSelector(state=>state.participantesCheckedReducer.paticipantesChecked)
    const premiados = useAppSelector(state => state.premiadosReducer.premiados)
    const actions = [
      { icon: <ModalConfirmaPagamentoFolha icone={true}/>, 
        name: 'Pagar folha',
        color:'white',
        bgColor:'#9c27b0',
        display: participantes.length === 0 ? "none" : "block"
      },
      { icon: <ModalConfirmarPagamentoPremiacao icone={true} />,
        name: 'Pagar prêmios',
        color:'white', 
        bgColor:'#2e7d32', 
        display: premiados.length === 0 ? "none" : "block"
      },
    //   { icon: <PrintIcon />, name: 'Print' },
    //   { icon: <ShareIcon />, name: 'Share' },
    ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const speedStyle = { 
    position: 'absolute',
     bottom: 16, right: 25,
     "@media(max-width : 700px)":{
       bottom: 5, right: 5,
     }
    }
  return (
    <Box sx={{ height: 320, width:300,transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={speedStyle}
        icon={<EmojiEventsIcon/>}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            sx={{background:action.bgColor, color:action.color,display:action.display}}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
