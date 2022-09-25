import React from 'react'
import Laptop from '../src/assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className= 'w-full bg-white py-16 px-4'>
      <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop"/>

        <div className='flex flex-col justify-center'>
          <p className='text-green-300 font-bold uppercase'>Painel de análise de dados</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Monitore seus dados em tempo real</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, ducimus voluptates deserunt, animi illum natus beatae error eveniet eos, maiores repudiandae! Quasi fugiat a modi cupiditate deleniti ab nulla! Modi.</p>

          <button className='bg-black text-green-300 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-2'>Comece agora</button>
        </div>

      </div>
    </div>
  )
}

export default Analytics
