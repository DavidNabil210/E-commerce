import React from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
export default function Product({product}) {
   const {id,category,description,price,image}=product;
  return (
    <div>
    <div className='border  shadow-lg h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center mx-auto'>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
                <img className='group-hover:scale-125 h-52 transition duration-300' src={image} alt="" />
            </div>

        </div>
        <div className='absolute top-0 -left-full  p-2 group-hover:left-0  transition-all duration-500'>
            <button>
                <div className=' bg-red-400 mb-2 flex  justify-center items-center text-white w-6 h-6 hover:bg-red-900'>
                <BsPlus/>
                </div>
            </button>
            <Link
            to={`/product/${id}`}
            className='w-6 h-6 bg-white flex justify-center items-center text-primary drop-shadow-xl'
            >
                <BsEyeFill/>
            </Link>
        </div>
    </div>
    </div>
  )
}
