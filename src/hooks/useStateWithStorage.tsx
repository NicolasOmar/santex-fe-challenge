import { useEffect, useState } from 'react'

const useStateWithStorage = () => {
  const [subTotal, setSubTotal] = useState<number>(
    +(localStorage.getItem('subTotal') ?? 0)
  )

  useEffect(() => {
    localStorage.setItem('subTotal', subTotal.toString())
  }, [subTotal])

  const addSubTotal = (priceToAdd: number) =>
    setSubTotal(_formerSubTotal => _formerSubTotal + priceToAdd)

  return {
    subTotal,
    addSubTotal
  }
}

export { useStateWithStorage }
