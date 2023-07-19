"use client"
import * as React from 'react';
import style from './telaPrincipalStyle.module.css'
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import { usuarioType } from '@/Types';
import CardTorneio from './Cards/CardTorneio';
import CardPremiacao from './Cards/CardPremiacao';
import CardParticipantes from './Cards/CardParticipantes';
import { useSession } from 'next-auth/react';
import { useAppDispatch } from '@/redux/hookes';
import { getUsuario } from '@/redux/reducers/usuarioReducer';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function TelaPrincipal({usuario}:{usuario:usuarioType}) {
     const { data } = useSession()
     const dispatch = useAppDispatch()
     React.useEffect(()=>{
       dispatch(getUsuario(usuario))
     },[dispatch, usuario])
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll >
         <Header/>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          <div className={style.mainUp}>
            <CardTorneio/>
            <CardPremiacao/>
           </div>
           <div>
            <CardParticipantes/>
           </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}