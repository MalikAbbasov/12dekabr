import React, { createContext } from 'react'
import useLocalStorage from '../../hook/useLocalStorage'


export const BasketContext= createContext()

function BasketProvider({children}) {
  const [basket, setBasket] = useLocalStorage("basket",[])

  function addBasket(item) {
    let elementIndex = basket.findIndex((x)=> x.id===item.id)
    if (elementIndex!== -1) {
      const newBasket = [...basket]
      newBasket[elementIndex].count++
      setBasket(newBasket)
    }
    else{
      setBasket([...basket, {...item,count:1}])
    }
  }

const data ={
  addBasket
}

  return (
    <div>
      <BasketContext.Provider value={data}>
        {children}
      </BasketContext.Provider>
    </div>
  )
}

export default BasketProvider