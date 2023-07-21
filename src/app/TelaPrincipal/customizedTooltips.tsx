import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { jogadoresType } from '@/Types';
import { formatoMonetario } from '../services';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} placement="top-start"/>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function CustomizedTooltips({jogadores}:{jogadores:jogadoresType[]}) {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <div style={{maxHeight:"300px", overflowY:"scroll"}}>
              {
                jogadores.map((elem, key)=>{
                  return <div key={key} style={{display:"flex"}}>
                    <Avatar
                      src={elem?.imagemDoJogador}
                      alt='image'
                      sx={{mr:1}}
                    />
                        <div className="min-w-0 flex-auto">
                          <div className="text-sm font-semibold leading-3 text-gray-900">
                            {elem.nome}
                          </div>
                          <div className="mt-1 truncate text-xs leading-2 text-gray-500">
                            {formatoMonetario(parseFloat(elem?.valorDoJogador as string))}
                          </div>
                        </div>
                  </div>
                })
              }

            </div>
          </React.Fragment>
        }
      >
        <div className="mt-1 line-clamp-3 text-sm leading-6 text-gray-600">{jogadores.length} jogadores</div>
      </HtmlTooltip>
    </div>
  );
}
