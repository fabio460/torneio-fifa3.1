import React from 'react'
import { ListaDeParticipantesDoTorneioSelecionado } from '../services'
import { Checkbox } from '@mui/material'

export default function ListaDeParticipantes() {
    var listaParticipantes = ListaDeParticipantesDoTorneioSelecionado()

  return (
    <div>
        <ul role="list" className="divide-y divide-gray-100 ">
            {listaParticipantes?.map((person) => (
            <li key={person.nome} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.emblemaDoTime} alt="" />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.time}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.nome}</p>
                </div>
                </div>
                <div className=" sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900"><Checkbox/></p>
                <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>   
                </div>
              
                </div>
            </li>
            ))}
        </ul>
    </div>
  )
}
