import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'
import PropTypes from 'prop-types'


function ProductList({products,handleCart}) {
  return (
    <div className="productList">
      {products.map((product) =>{
        return <ProductCard key={product.id} product={product} handleCart={handleCart}/>
      })}
    </div>
  )
}

ProductList.propTypes ={
    products: PropTypes.array,
    handleCart:PropTypes.func
}

export default ProductList