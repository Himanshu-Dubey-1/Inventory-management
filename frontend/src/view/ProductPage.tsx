
import { useParams } from "react-router-dom";
import { useAppSelector } from '../store/Hooks/hook';

function ProductPage() {

    const products = useAppSelector((state) => state.items.items);
    

    const { id } = useParams(); 
    const Product = products.find((product) => product._id  === id);

    if (!Product) {
        return <h2>Card not found!</h2>;
      }

  return (
    <div className="">
        <div className='md:px-40 m-5 w-full flex justify-center'>
            {/* <p className='text-2xl bg-yellow-100 border px-20 py-40 rounded-3xl text-center'>IMAGE</p> */}
            <img src={`${Product.picture}`} alt="Product Image" className='text-2xl border px-20 py-10 rounded-3xl text-center' />
        </div>
        <div className='md:px-32 m-1'>
            <div className='text-center space-y-3 text-xl border border-black py-6 rounded-2xl'> 
                <p><strong>Title: {Product.name} </strong></p>
                <p>Product Quantity: {Product.quantity}</p>
                <p>Price: ${Product.price}</p>
                <button className='bg-blue-500 px-28 rounded-xl py-3 font-bold text-white'>BUY NOW</button>
            </div>
        </div>
  </div>
  )
}

export default ProductPage