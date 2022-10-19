import { FormEvent, useState } from 'react'
import { DownloadSimple   } from "phosphor-react";

import Header from '../../components/Header';

import '../../input.css';

import io from 'socket.io-client'
const socket = io('http://localhost:5000')


  

function Contact() {

    async function handleCreateSolicitation(event: FormEvent){
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

          socket.emit("create",  {
            name:`${data.name} ${data.lastname}`, 
            subject: data.subject
          })
    }
  return  (
     <>
      {/* <Header lengthElement='20'/> */}

     <div className='w-full mt-20 flex justify-center items-center'>
        <div className='w-[878.64px] h-[701px] bg-white rounded-md mb-20 shadow-lg border flex flex-col items-center'>

            <div className='w-full border-b h-20 p-5 flex justify-between items-center'>
                <h1 className='text-[#1B1B1B] text-md font-regular  '>Formulário de abertura</h1>
            </div>
            <form className="w-full max-w-lg mt-20" onSubmit={handleCreateSolicitation}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nome
                    </label>
                    <input id="name" name="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane"/>
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Sobrenome
                    </label>
                    <input id="lastname" name="lastname" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Assunto
                    </label>
                    <select id="subject" name="subject"  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>Assunto...</option>
                        <option>Computador</option>
                        <option>Celular</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Descreva seu Problema
                        </label>
                        <textarea id="message" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Sua mensagem..."></textarea>
                    </div>
                </div>
                <button className="bg-[#00648A] hover:bg-blue-700 font-bold py-2 px-4 rounded text-white float-right mt-10">
                    Enviar
                </button>
                </form>
        </div>
     </div>
         
    </>
  )
}

export default Contact
