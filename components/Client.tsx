import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data' 

const Client = () => {
  return (
    <div className='py-1 gap-y-10' id='testionials'>
        <h1 className='heading mt-0'>
            Kind words {' '}
            <span className='text-purple'>Satisfied customers</span>
        </h1>
        <div className='flex flex-col ites-center max-lg:mt-10'>
              <InfiniteMovingCards
              items={testimonials}
              direction='right'
              speed='slow' />

              <div>

              </div>
        </div>
        
    </div>
  )
}

export default Client