import React from 'react';
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1000px] mt-[60px] w-full h-screen mx-auto text-center  flex  flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>GROWTHING MARKETING COM ANÁLISE DE DADOS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Metodologia Grow</h1>
        <div className=' flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Rápido, Flexível e financiado por  </p>
          <Typed 
          className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
          strings={['B2B', 'XP', 'LESS']}
          typeSpeed={120}
          backSpeed={140}
          loop
          />
        </div>

      <p className='md:text-2xl text-xl font-bold text-gray-500'> Monitore e analise seus dados para crescer
      </p>
      <button className='bg-[#00df9a] w-[200px] mt-5 rounded-md font-medium my-6 mx-auto py-2 text-black'>Comece agora</button>

      </div>


      
    </div>
  )
}

export default Hero;