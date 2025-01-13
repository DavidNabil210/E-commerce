import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext';
import Product from '../product/Product';

export default function Home() {
  const{products}=useContext(ProductContext);
  console.log(products);
  //get ony men's & women's clothing category
  const FilteredProducts = products.filter(item => {
    return item.category ==="men's clothing" || item.category === "women's clothing"
  })
  console.log(FilteredProducts);
  return (
    <div>
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1 max-w-sm mx-auto md:max-w-none md:mx-0">
          {Array.isArray(FilteredProducts) && FilteredProducts.length > 0 ? (
            FilteredProducts.map((product) => (
              <Product key={product.id} product={product}/>
              
            ))
          ) : (
            <p className="text-gray-500 text-center m-auto text-3xl flex justify-center align-items-center">No products found.</p>
          )}
        </div>
      </div>
    </section>
  </div>
  
  )
}
