import React, { useState, useEffect } from 'react'
import { useCartContext } from '../../Context/CartContext'
import CardComponents from '../../Components/OtherComponents/CardComponents'
import DataLoader from '../../Components/OtherComponents/DataLoader'
import { message } from 'antd'
import { useAuthContext } from '../../Context/AuthContext'


export default function Home() {

  const [cart, setCart] = useCartContext()
  const [products, setProducts] = useState([])
  const [isAuth , setIsAuth] = useAuthContext()
  const [loading, setLoading] = useState(true)

  // let skipElement = Math.floor(Math.random() * 100)


  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=50`);
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.log(error)
    }
    finally {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  }



  useEffect(() => {
    fetchData()
  }, [])

  // console.log(cart)

  const handleCart = (product) => {
    for(let i = 0 ; i < cart.length ; i++){
      if(cart[i].id === product.id){
        message.warning("Already in the Cart")
        return 
      }
    }
    if(isAuth){
      message.success("Added")
      product.date = new Date().toISOString().split('T')[0]
      product.quantity = 1
      setCart([...cart, product])
    }
    else{
      message.error("Please Register to add to cart")
    }
  }


  return (
    <main>
      <div className="content" id='content'>
        <h1 className="text-center my-5 fw-bolder">
          Best Cart System
        </h1>
        {
          loading
            ?
            <DataLoader />
            :
            <div className="container">
              <div className="row">
                {products.map((product) => (
                  <div className="col-12 col-md-4" key={product.id}>
                    <CardComponents name={product.title} price={product.price} img={product.image} users={product.rating.count} rating={product.rating.rate} onClick={(e) => { handleCart(product) }} />
                  </div>
                ))}
              </div>
            </div>
        }

      </div>
    </main >
  )
}
