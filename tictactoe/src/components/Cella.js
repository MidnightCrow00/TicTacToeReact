import React from 'react'
import "./Cella.css"

export default function Cella(props) {
  function katt(){
    //játéktér katt függvényét kell hívnia
    props.katt(props.index)
  }
    return (
    <div className='cella' onClick={()=>katt()}>{props.jel}</div>
  )
}

