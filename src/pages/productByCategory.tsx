import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Skeleton } from '../components/loader'
import ProductCard from '../components/product-card'
import { useProductsByCategoryQuery } from '../redux/api/productAPI'
import { addToCart } from '../redux/reducer/cartReducer'
import { CartItem } from '../types/types'

const ProductByCategory = () => {
    const {category} = useParams()
    const dispatch = useDispatch();
    console.log(category);
    const {data, isLoading} = useProductsByCategoryQuery(category || '');
    console.log(data?.products);
    const addToCardHandler = (cartItem: CartItem) => {
        if(cartItem.stock < 1){
          return toast.error("Out of Stock");
        }
        dispatch(addToCart(cartItem))
        toast.success("Added To Cart");
      };
    
  return (
    <div>
                {
          isLoading ? <Skeleton width="80vw"/> : data?.products.map((product, index) =>  (
              <ProductCard
                key={index}
                productId={product._id}
                name={product.name}
                price={product.price}
                stock={product.stock}
                handler={addToCardHandler}
                photo={product.photo}
                // description={product.description}
                tag={product.tag || "New"}
                sale={product.sale || false}
                numOfReviews={product.numOfReviews || 0}
                star={product.star || 0}
              />
            )
          )
        }
    </div>
  )
}

export default ProductByCategory