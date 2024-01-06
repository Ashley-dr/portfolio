import React from 'react'

const Projectitem = ({img,title,about,stack1,stack2,stack3,stack4,stack5,stack6,dom}) => {
  return (
    <div className='grid grid-cols-2 gap-28'>
        <div className='w-full max-w-[700px]'>
          <h1 className='mb-5 text-4xl font-bebos text-teal-400 font-medium'>{title}</h1>
        
        <div className='flex gap-1 row-span-3'>
          <p className='bg-gray-900/80 px-3 py-1 rounded rounded-m text-emerald-600 font-bebos font-bold'>Stacks: </p>
          <span className='bg-gray-900/80 px-3 py-1 rounded rounded-m text-emerald-400 font-bebos font-bold'>{stack1}</span>
          <span className='bg-gray-900/80 px-3 py-1 rounded rounded-m text-emerald-400 font-bebos font-bold'>{stack2}</span>
          <span className='bg-gray-900/80 px-3 py-1 rounded rounded-m text-emerald-400 font-bebos font-bold'>{stack3}</span>
          <span className='bg-gray-900/80 px-3 py-1 rounded rounded-m text-emerald-400 font-bebos font-bold'>{stack4}</span>
          <span className='bg-gray-900/80 px-3 py-1 rounded rounded-m text-emerald-400 font-bebos font-bold'>{stack5}</span>
          <span className='bg-gray-900/80 px-3 py-1 rounded rounded-m text-emerald-400 font-bebos font-bold'>{stack6}</span>
        </div>
        <p className='mb-5 mt-5 text-teal-200 font-bebos'>{about}</p>
        <span className='px-5 py-2 bg-gray-900 rounded rounded-m text-red-900'>{dom}</span>
        </div>
        <img className='max-w-[500px]' src={img} />   
    </div>
  )
}

export default Projectitem
