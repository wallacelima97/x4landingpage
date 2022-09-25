import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Single} alt="" />
          <h2 className='text-2xl font-bold text-center py-7'>Plano Single</h2>
          <p className='text-4xl font-bold text-center'>R$ 499,99</p>
          <div className='text-center font-medium mt-2'>
            <p className='py-2 border-b mx-8 mt-5'>500gb Armazenamento</p>
            <p className='py-2 border-b mx-8'>Um usuário compartilhado</p>
            <p className='py-2 border-b mx-8 '>Upload de 5gb</p>
          </div>

          <button className='bg-green-300 text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Comece agora</button>
 
        </div>

        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent 'src={Double} alt="" />
          <h2 className='text-2xl font-bold text-center py-7'>Plano Double</h2>
          <p className='text-4xl font-bold text-center'>R$ 999,99</p>
          <div className='text-center font-medium mt-2'>
            <p className='py-2 border-b mx-8 mt-5'>1000gb Armazenamento</p>
            <p className='py-2 border-b mx-8'>Dois usuários compartilhados</p>
            <p className='py-2 border-b mx-8 '>Upload de 10gb</p>
          </div>

          <button className='bg-black text-green-300 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Comece agora</button>
 
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white'src={Triple} alt="" />
          <h2 className='text-2xl font-bold text-center py-7'>Plano Triple</h2>
          <p className='text-4xl font-bold text-center'>R$ 1499,99</p>
          <div className='text-center font-medium mt-2'>
            <p className='py-2 border-b mx-8 mt-5'>1500gb Armazenamento</p>
            <p className='py-2 border-b mx-8'>Três usuários compartilhados</p>
            <p className='py-2 border-b mx-8 '>Upload de 15gb</p>
          </div>

          <button className='bg-green-300 text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Comece agora</button>
 
        </div>
      </div>
    
    
    </div>
  )
}

export default Cards