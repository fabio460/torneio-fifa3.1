'use client'
import React from 'react'
import {Button} from '@mui/material'
export default function ButtomSignOut() {
    const logout = ()=>{
        localStorage.removeItem("jwt")
        window.location.reload()   
    }
  return (
    <div>
      <Button variant='outlined' onClick={logout}>Deslogar</Button>
    </div>
  )
}
