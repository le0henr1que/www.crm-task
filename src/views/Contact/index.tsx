import { useState } from 'react'
import { DownloadSimple   } from "phosphor-react";

import Header from '../../components/Header';

import '../../input.css';

function Contact() {
  return  (
     <>
      <Header/>

     <div className='w-full mt-20 flex justify-center items-center'>
        <div className='w-[878.64px] h-[701px] bg-white rounded-md mb-20 shadow-lg border flex flex-col items-center'>
            <div className='w-full border-b h-20 p-5 flex justify-between items-center'>
                <h1 className='text-[#1B1B1B] text-md font-regular  '>Protocolo #XXXXXX</h1>
                <h1 className='text-[#1B1B1B] text-md font-regular   '>Data: 27/08/2022</h1>
            </div>
            <div className='w-[360px] h-[66px] bg-[#3C9040] rounded-[20px] flex justify-center items-center mt-10'>
                <h1 className='text-[#FFFF] text-3xl font-bold'>Etapa</h1>
            </div>

            <h1 className='text-[#262626] text-4xl font-regular mt-[30px]'>GK Condomínios</h1>

            <div className='w-[90%] bg-white h-[200px] mt-10 flex justify-start flex-wrap border-b'>
                <div className='ml-10 mr-10'>
                    <h1 className='text-[#848484] text-sm font-regular'>Email</h1>
                    <h1 className='text-[#007AFF] text-md font-regular gap-5'>Email@gmail.com</h1>
                </div>
                <div className='ml-10 mr-10 '>
                    <h1 className='text-[#848484] text-sm font-regular'>Produto</h1>
                    <h1 className='text-[#1B1B1B] text-md font-regular gap-5'>Lei Geral de Proteção de Dados.</h1>
                </div>
                <div className='ml-10 mr-10 w-[19%] flex-wrap'>
                    <h1 className='text-[#848484] text-sm font-regular'>Etapa</h1>
                    <h1 className='text-[#1B1B1B] text-md font-regular gap-5'>Treinamento e conscientização</h1>
                </div>
                <div className='ml-10 mr-10 '>
                    <h1 className='text-[#848484] text-sm font-regular'>Data de última atualização</h1>
                    <h1 className='text-[#1B1B1B] text-md font-regular gap-5'>12/06/2021</h1>
                </div>
                <div className='ml-10 mr-10 '>
                    <h1 className='text-[#848484] text-sm font-regular'>Data de Ínicio</h1>
                    <h1 className='text-[#1B1B1B] text-md font-regular gap-5'>12/02/20</h1>
                </div>
            </div>
            <div className='w-[100%] bg-white h-[100px] mt-5 flex justify-center'>
                <div className='w-[140px] h-[70px] bg-white flex flex-col justify-center items-center'>
                    <h1 className='text-[#333333] text-3xl font-semibold flex justify-center '>12:09</h1>
                    <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Data e Horário </h1>
                </div>
                <div className='w-[140px] h-[70px] bg-white flex flex-col justify-center items-center mt-[6px]'>
                    <div className='w-[120px] h-[24px] rounded-[26px] bg-[#4BB450] flex flex-col justify-center items-center'>
                        <h1 className='text-white text-sm font-bold flex justify-center'>Etapa</h1>
                    </div>
                    <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Etapas</h1>
                </div>
                <div className='w-[140px] h-[70px] bg-white flex flex-col justify-center items-center'>
                    <h1 className='text-[#333333] text-3xl font-semibold flex justify-center '>Felipe</h1>
                    <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Usuário</h1>
                </div>
                <div className='w-[300px] h-[70px] bg-white flex flex-col justify-center items-center'>
                    <h1 className='text-[#007AFF] text-3xl font-semibold flex justify-center '>(11) 98732-2032</h1>
                    <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Contato</h1>
                </div>
            </div>
            <div className='w-[90%] bg-white h-[100px] mt-5 flex justify-between'>
                <div className='bg-white flex flex-col justify-center items-center'>
                    <button className="bg-[#CDCDCD] hover:bg-blue-700 font-bold py-2 px-4 rounded text-white">
                        Programar
                    </button>
                </div>
                <div className='bg-white flex justify-center items-center'>
                    <button className="flex items-center m-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        <DownloadSimple/> ANEXAR
                    </button>
                     <button className="bg-[#00648A] hover:bg-blue-700 font-bold py-2 px-4 rounded text-white">
                        FINALIZAR
                    </button>
                </div>
            </div>
            
        </div>
     </div>
         
    </>
  )
}

export default Contact
