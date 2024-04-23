import { useState } from 'react'
import './App.css'
import products from './assets/products.json'
import ProductList from './Components/ProductList/ProductList'
import Cart from './Components/Cart/Cart'

function App() {
  const[cart, setCart] = useState([])

//añadir productos al carrito
  const handleCart = (product) => {
    const  productExistIdx = cart.findIndex(item => item.name === product.name) //busca si hay producto con el nombre, si existe devuelve el index
    if(productExistIdx !== -1){ //si hay index (-1es que no hay nada, cualquier otra cosas )
      const updateCart = [...cart] //copio el contenido del carrito anterior
      updateCart[productExistIdx].quantity++ //aumentas la cantidad de producto en 1
      setCart(updateCart)//Seteamos en el padre el carrito nuevo
    }else{ //Si el carrito esta vacio salta al else y añade el primer producto 
      setCart([...cart, {...product, quantity:1}])
    }
  }

  const removeProduct = (product) => {
    const  productExistIdx = cart.findIndex(item => item.name === product.name) 
    const updateCart = [...cart] 

    if(updateCart[productExistIdx].quantity === 1 ){
      updateCart.splice(productExistIdx,1)
      setCart(updateCart)

    }else{
      updateCart[productExistIdx].quantity--
      setCart(updateCart)
    }
  }

  const deleteProduct = (product) => {
      const  productExistIdx = cart.findIndex(item => item.name === product.name) 
      const updateCart = [...cart] 
      updateCart.splice(productExistIdx,1)
      setCart(updateCart)
  }
  const clearCart = () => {
    setCart([])
}


  return (
    <>
      <ProductList products={products} handleCart={handleCart}  />
      <Cart cart={cart} removeProduct={removeProduct} addProduct={handleCart} deleteProduct={deleteProduct} onClearCart={clearCart}/>
    </>
  )
}


export default App 

