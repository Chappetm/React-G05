import React from 'react'
import style from './Container.module.css'
import ConteinerCripto from './ConteinerCripto'

const Container = ({ cripto, call }) => {



    return (
        <div className={style.container}>
            <ConteinerCripto call={call} cripto={cripto}/>
        </div>
    )
}

export default Container;