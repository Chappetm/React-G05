import React from 'react'
import style from './Cripto.module.css'
import { Link } from 'react-router-dom'

const Cripto = ({ name, symbol, price }) => {

    return (
        <Link to='/detail/:id'>
            <div className={style.cripto}>
                <h6>{name}</h6>
                <h6>{symbol}</h6>
                <h6>{price}</h6>
            </div>
        </Link>
    )
}

export default Cripto;