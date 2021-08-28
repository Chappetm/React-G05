import React, { useEffect } from 'react'
import Cripto from './Cripto'

const ConteinerCripto = ({ cripto, call }) => {

    useEffect(() => {
        call()
    }, [])

    return (
        <div>
            {
                cripto.map(el => <Cripto name={el.name} symbol={el.symbol} price={el.current_price} />)
            }
        </div>
        
    )
}

export default ConteinerCripto;