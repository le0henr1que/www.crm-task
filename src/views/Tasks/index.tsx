import { useEffect, useState } from 'react'
import { MagnifyingGlass, Funnel, CaretLeft , CaretRight   } from "phosphor-react";
import Header from '../../components/Header';

import { useNavigate } from 'react-router';
import '../../input.css';
import io from 'socket.io-client'
import { Hidden } from '@material-ui/core';

const socket = io('http://localhost:5000')



interface Solicitation {
  _id: String;
  status: String;
  name: String;
  subject: string;
  created_at: Date;
  updated_at: Date;
}


function Task() {
  const [solicitation, setSolicitation] = useState<Solicitation[]>([])
  const [celular, setCelular] = useState(0)
  const [computador, setComputador] = useState(0)


  const navigate = useNavigate()
  function listSolicitaation(){
    socket.on('list', function(solicitation){
      setSolicitation(solicitation)
      const lenghtCelulcar = solicitation.filter((solicitation: { subject: string; }) => solicitation.subject == "Celular" );
      const lenghtComputer = solicitation.filter((solicitation: { subject: string; }) => solicitation.subject == "Computador" );
      setCelular(lenghtCelulcar.length)
      setComputador(lenghtComputer.length)
    })
  }
  listSolicitaation()

    const hendleFilter = (type:string) => {
      setSolicitation(solicitation.filter((solicitation: { subject: string; }) => solicitation.subject == type ))
    }
useEffect(() =>{
  listSolicitaation()
})
  return  (
     <>
      <Header/>
     
      {/* <h1 className='text-slate-800 text-3xl font-bold flex justify-center mt-10 '>To do</h1> */}
          <div className='w-full h-20 flex justify-center border-b-2 bg-transparent mt-10'>
            {/* <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  border-r'>
              <h1 className='text-[green] text-3xl font-bold flex justify-center '>12</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Etapas</h1>
            </div>
            <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  border-r'>
              <h1 className='text-[yellow] text-3xl font-bold flex justify-center '>12</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Abandonos</h1>
            </div> */}
            <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  border-r cursor-pointer' onClick={() => hendleFilter("Computador")}>
              <h1 className='text-[red] text-3xl font-bold flex justify-center '>{computador}</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Computador</h1>
            </div>
            <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center cursor-pointer' onClick={() => hendleFilter('Celular')}>
              <h1 className='text-[blue] text-3xl font-bold flex justify-center '>{celular}</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Celular</h1>
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
                        Status  
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Nome
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                         Assunto
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Data de Criação
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    solicitation.map(solicitation => {
                      return (
                        <tr className="border-b">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 cursor-pointer" onClick={() => navigate(`/Contact/${solicitation._id}`)}>
                            {/* <div onClick={handleCreateSolicitation} className='w-[150px] h-[29px] rounded-[26px] bg-[#4BB450] flex flex-col justify-center items-center'>
                              <h1 className='text-white text-sm font-bold flex justify-center '>Clientes</h1>
                            </div> */}
                            {solicitation.status}
                 
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {solicitation.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {solicitation.subject}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {solicitation.created_at}
                          </td>
                      </tr>
                      )
                    })
                  }
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

export default Task
