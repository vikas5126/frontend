import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'

const BulkOrder = () => {
  return (
    <div>
        <Navbar/>
        <img src='https://dryfruithouse.com/bulk-ordering/orders/bulk-order.jpg' alt='bulk order' className='w-full h-[400px] object-cover'/>
        <div className='w-[80%] m-auto mt-8 flex flex-col gap-4'>
            <h1 className='text-[2.5rem] font-semibold'>Wholesale Dry Fruits</h1>
            <p className=' text-gray-600'>Dry Fruit House provides options to buy in bulk quantities. Our company is very popular in premium quality and best price products. We provide the best bulk/wholesale prices for dry fruits, nuts, seeds and alike products.
            Dry Fruit House is a platform where you get to choose from the best in market and offers you the finest variety of dry fruits. We offer dry fruits such as almonds, cashews, raisins, walnuts, dates and Pistachio. Exotic nuts such as Hazelnuts etc. We also offer a variety of berries such as cranberries, blueberries and seed mixes all of which are sourced and packed hygienically</p>
        </div>
        {/* <Button className="bg-red-900 w-[10rem] h-12 mt-4 self-start text-amber-100">
            View More
        </Button> */}
        <div className='w-[80%] m-auto mt-8 flex flex-col gap-4'>
            {/* <h1 className='text-[2.5rem] font-semibold'>Bulk Order Form</h1> */}
            <p className=' text-gray-600'>Please fill the form below and we will get back to you as soon as possible.</p>
            <form className='flex flex-col gap-4'>
                <input type="text" placeholder='Name' className='border border-gray-300 rounded-lg p-2'/>
                <input type="email" placeholder='Email' className='border border-gray-300 rounded-lg p-2'/>
                <input type="text" placeholder='Phone Number' className='border border-gray-300 rounded-lg p-2'/>
                <textarea placeholder='Message' className='border border-gray-300 rounded-lg p-2'></textarea>
                <Button className="bg-red-900 w-[10rem] h-12 mt-4 self-start text-amber-100" onClick={() => alert('Form submitted!')}>
                    Submit
                </Button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default BulkOrder