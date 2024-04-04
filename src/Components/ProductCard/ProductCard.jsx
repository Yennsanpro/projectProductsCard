
import '../ProductCard/ProductCard.css'
import PropTypes from 'prop-types'


function ProductCard({product:{price, name, category, description},handleCart}) {
  return (
    <div className="productCard">
      <p className='item1'>{name}</p>
      <p className='item2'>{category}</p>
      <p className='item3'>{description}</p>
      <p className='item4'>{price} €</p>
      <button type='button' className='item5' onClick={() => handleCart({name,price,description,category})}>Add</button>
    </div>
  )
}

ProductCard.propTypes ={
    product: PropTypes.object,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    handleCart: PropTypes.func
}


export default ProductCard
