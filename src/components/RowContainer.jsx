import React, { useEffect, useRef, useState } from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/Reducer'

const RowContainer = ({flag,data,scrollValue}) => {
    const RowContainer=useRef()
    
    const [items,setItems]=useState([])

    const [{cartItems},dispatch]=useStateValue() 
    
    const addtocart=(item)=>{
        dispatch({
            type:actionType.SET_CARTITEMS,
            cartItems:items ,
        })
        localStorage.setItem("cartItems",JSON.stringify(items))
    }
    
    useEffect(()=>{
        RowContainer.current.scrollLeft +=scrollValue
    },[scrollValue])

    useEffect(()=>{
        addtocart()
    },[items])

  return (
    <div 
       ref={RowContainer} className={`w-full flex items-center gap-3 scroll-smooth my-12  ${flag 
            ? "overflow-x-scroll scrollbar-none" 
            : "overflow-x-hidden flex-wrap justify-center"}`}>

        {data && data.length > 0 ?  (data.map((item) => (
             <div key={item?.id} className='w-275 h-[185px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverplay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative    '>
             <div className='w-full flex items-center justify-between'>
                <motion.div className='w-36 h-36 -mt-8 drop-shadow-2xl' whileHover={{scale:1.2}} >
                     <img className='w-full h-full object-contain' src={item?.imageURL} alt="image" />
                </motion.div>
                 <motion.div whileTap={{scale:0.75}} onClick={()=>setItems([...cartItems,item ])} className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                     <MdShoppingBasket className='text-white'/>
                 </motion.div>
             </div>
             <div className='w-full flex flex-col items-end justify-end'>
                 <p className='text-textColor font-semibold text-base md:text-lg'>{item?.title}</p>
                 <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
                 <div className='flex items-center gap-8'>
                     <p className='text-lg text-headingColor font-semibold'>
                         <span className='text-sm text-red-500'>$</span>{item?.price}
                     </p>
                 </div>
             </div>
         </div>
        ))): (<div className='w-full flex flex-col items-center justify-center'>
             <img src={NotFound} className='h-340' alt="notfound" />
             <p className='text-xl text-headingColor font-semibold my-2'>Item Not Available</p>
            </div>
        )}
    </div>
  )
}

export default RowContainer