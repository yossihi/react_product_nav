import React, { useContext, useEffect, useState } from 'react'
import MyContext from './MyContext'

const Total = () => {
    const [Total, setTotal] = useState(0)
    const {userCart} = useContext(MyContext)

    useEffect(() => {
        let new_total = 0
        userCart.forEach(element => {
            new_total += element.price * element.quantity
        });
        setTotal(new_total)
    }, [userCart])
    
  return (
    <div><h2>Total Price: {Total.toFixed(2)}</h2></div>

    
  )
}

export default Total