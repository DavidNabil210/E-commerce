import React from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
export default function Product({product}) {
   const {id,category,description,price,image}=product;
  return (
    <div>
    <div className='border border-blue-600 h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center mx-auto'>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='group-hover:scale-125 h-52 transition duration-300' src={image} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}
