import React, { useEffect, useState } from 'react'
import { ListaDeParticipantesDoTorneioSelecionado } from '../services'
import { Checkbox } from '@mui/material'
import { checkedTypes, participantesType } from '@/Types'
import { useAppDispatch } from '@/redux/hookes'
import { setParticipantesChecked } from '@/redux/reducers/participantesCheckedReducer'


export default function ListaDeParticipantes() {
    var listaParticipantes = ListaDeParticipantesDoTorneioSelecionado()
    const [chekedList, setchekedList] = useState<checkedTypes[]>([])
    const handleChecked = (checked:boolean, participante:participantesType)=>{
        let listAux:checkedTypes[] = []
        if (checked === true) {
          setchekedList([...chekedList,{checked, participante}])        
        }else{
          let list = chekedList.filter(e=>{
            if (e.participante.id !== participante.id) {
                return e
            }
          })
          setchekedList(list)
        }
    }
    const dispatch = useAppDispatch()
    useEffect(()=>{
      dispatch(setParticipantesChecked(chekedList))
    },[chekedList])
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
                  <p className="text-sm leading-6 text-gray-900">
                      <Checkbox
                        onChange={(e)=> handleChecked(e.target.checked, person)}
                      />
                  </p>
                </div>
            </li>
            ))}
        </ul>
    </div>
  )
}
