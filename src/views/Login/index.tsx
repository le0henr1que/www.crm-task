import { FormEvent, useState } from 'react'
import { DownloadSimple   } from "phosphor-react";

import Header from '../../components/Header';

import '../../input.css';

import io from 'socket.io-client'
const socket = io(import.meta.env.VITE_SOCKET_URL)


  

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
        <div className='w-[500px] h-[501px] bg-white rounded-md mb-20 shadow-lg border flex flex-col items-center'>

            <div className='w-full border-b h-20 p-5 flex justify-center items-center'>
                <img src="/logo.png" className="w-[150px]"/>
                {/* <h1 className='text-[#1B1B1B] text-md font-regular  '>Formulário de abertura</h1> */}
            </div>
            <form className="w-[500px] max-w-lg mt-20 pl-[30px] pr-[30px]" onSubmit={handleCreateSolicitation}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Usuário
                        </label>
                        <input id="name" name="name" className={"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"} type="text" placeholder="Jane"/>
                    </div>

                    <div className="w-full md:w-1/1 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Senha
                        </label>
                        <input id="lastname" name="lastname" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="Password"/>
                    </div>
                </div>
                <button className="bg-[#53BC00] hover:bg-blue-700 font-bold py-2 px-4 rounded text-white float-left mt-10">
                    Entrar
                </button>
            </form>

        </div>
     </div>
         
    </>
  )
}

export default Contact
