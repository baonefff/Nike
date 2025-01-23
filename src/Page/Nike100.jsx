import Button from "../components/Button";

import {  products } from "../constants";

import { useEffect } from "react";

const Nike100 = () => {
  
useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  
  const nikeProduct = products.find((product) => product.name === "Nike Air Jordan-100");

  if (!nikeProduct) {
    return <p>Product not found</p>; 
  }

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      
      <div className="relative xl:w-2/5 flex flex-col justify-start items-start w-full max-xl:px-8 pt-28">
  {/* Product Name */}
  <h2 className="text-4xl font-bold text-gray-900 mb-4">{nikeProduct.name}</h2>
  
  {/* Product Description */}
  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience. 
    Providing you with unmatched quality, innovation, and a touch of elegance.
    <br />
    Our dedication to detail and excellence ensures your satisfaction.
  </p>
  
  {/* Rating and Button Section (Side by Side) */}
  
  
  {/* Price */}
  <p className="font-montserrat text-slate-gray text-xl leading-normal mt-4">{nikeProduct.price}</p>
  
  <Button 
  label= "Add to cart"
  backgroundColor ="bg-white" borderColor=" border-slate-gray" textColor="text-coral-red" hoover={"hover:bg-coral-red hover:text-white hover:bg-opacity-90"}
    fullWidth
    
  />
  
</div>

      
      <div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={nikeProduct.imgURL}
          width={610}
          height={500}
          className="object-contain relative z-10"
          alt={nikeProduct.name}
        />
      </div>
    </section>
  );
};

export default Nike100;
