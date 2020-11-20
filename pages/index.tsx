import React, { useState, useEffect } from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    return () => {
      window
        .fetch('/api/avo')
        .then((response) => response.json())
        .then(({ data, length }) => {
          setProductList(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((avo) => (
        <p>{avo.name}</p>
      ))}
    </div>
  )
}

export default HomePage
