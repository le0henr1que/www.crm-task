import { useState } from 'react'
import { MagnifyingGlass, Funnel, CaretLeft , CaretRight   } from "phosphor-react";

import './input.css';
function App() {
  return  (
     <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-800"
              href="#"
            >
              CRM  TO-DO
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              // onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            // className={
            //   "lg:flex flex-grow items-center" +
            //   (navbarOpen ? " flex" : " hidden")
            // }
            id="example-navbar-danger"
          >
          
          </div>
        </div>
      </nav>

      <h1 className='text-slate-800 text-3xl font-bold flex justify-center mt-10 '>To do</h1>
          <div className='w-full h-20 flex justify-center border-b-2 bg-transparent mt-10'>
            <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  border-r'>
              <h1 className='text-[green] text-3xl font-bold flex justify-center '>12</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Etapas</h1>
            </div>
            <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  border-r'>
              <h1 className='text-[yellow] text-3xl font-bold flex justify-center '>12</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Abandonos</h1>
            </div>
            <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  border-r'>
              <h1 className='text-[red] text-3xl font-bold flex justify-center '>12</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Dúvidas</h1>
            </div>
            <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  '>
              <h1 className='text-[blue] text-3xl font-bold flex justify-center '>12</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Administrativo</h1>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[90%]  border mt-10 rounded-lg  overflow-hidden ">
              <div className="w-full justify-between flex p-[15px] border-b">
                  <div>
                    <h1 className='text-slate-800 text-3xl font-bold flex justify-center '>Clientes</h1>
                  </div>
                  <div className='flex gap-5 mt-2'>
                    <MagnifyingGlass className='text-xl'/>
                    <Funnel className='text-xl'/>
                  </div>
              </div>
                <table className="min-w-full">
                  <thead className="border-b bg-[#FAFAFA]">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Indicador 
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Empresa
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                         Certificação
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Criado em
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className='w-[150px] h-[29px] rounded-[26px] bg-[#4BB450] flex flex-col justify-center items-center'>
                          <h1 className='text-white text-sm font-bold flex justify-center '>Clientes</h1>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      GK Condomínios
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        LGPD - Lei geral de Proteção de Dados
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Há 10 minutos atrás
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className='w-[150px] h-[29px] rounded-[26px] bg-[#4BB450] flex flex-col justify-center items-center'>
                          <h1 className='text-white text-sm font-bold flex justify-center '>Clientes</h1>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      GK Condomínios
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        LGPD - Lei geral de Proteção de Dados
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Há 10 minutos atrás
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className='w-[150px] h-[29px] rounded-[26px] bg-[#4BB450] flex flex-col justify-center items-center'>
                          <h1 className='text-white text-sm font-bold flex justify-center '>Aguardando</h1>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      GK Condomínios
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        LGPD - Lei geral de Proteção de Dados
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Há 10 minutos atrás
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="float-right p-3 flex gap-2">
                  <h1 className='text-neutral-400 text-sm font-bold '>1-10 de 500 </h1>
                  <CaretLeft/>
                  <CaretRight/>
                </div>
              </div>
          </div>
         
    </>
  )
}

export default App
