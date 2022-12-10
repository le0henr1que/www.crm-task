import { useEffect, useState } from 'react'
import { MagnifyingGlass, Funnel, CaretLeft , CaretRight  } from "phosphor-react";
import Header from '../../components/Header';
import Load from '../../components/Load';


// import env from "react-dotenv";

import { useNavigate } from 'react-router';
import '../../input.css';
import io from 'socket.io-client'
import { Hidden } from '@material-ui/core';

// const SOCKET_URL: string = (process.env.REACT_APP_SOCKET_URL as string);

// alert(!import.meta.env.VITE_SOME_KEY ? "Váriavel não existe" : import.meta.env.VITE_SOME_KEY )
// alert(import.meta.env.VITE_SOME_KEY)


// const socket = io(import.meta.env.VITE_SOCKET_URL)
const token = "tokenTeste";

const socket = io(import.meta.env.VITE_SOCKET_URL, {
  query: {token}
});



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

  const [load, setLoad] = useState(true)

  const [page, setPage] = useState(1)

  const [countSolicitation, setCountSolicitation] = useState(0)
  const [contSolicitationPhone, setCountContSolicitationPhone] = useState(0)
  const [contSolicitationComputer, setCountContSolicitationComputer] = useState(0)

  // const [alert, setAlert] = useState('hidden')

  const handleClickPagination = (selectArrowNextOrBack:string) => {
  
    if(selectArrowNextOrBack == "Next"){
      setPage(page+1)
      page > Math.round(countSolicitation / 6) - 1  && setPage(Math.round(countSolicitation / 6))
      
      
      socket.emit('listNextPagination', page)

      socket.on('emitNextPage', function(solicitation){
        console.log(solicitation)
        setSolicitation(solicitation)
      })

    }else{
      setPage(page-1)
      page == 1  && setPage(1)

      console.log(page - 2)
      var pagination = page - 2
      socket.emit('listNextPagination', pagination <= 0 ? 0 : pagination)

      socket.on('emitNextPage', function(solicitation){
        console.log(solicitation)
        setSolicitation(solicitation)
      })

    } 
  }

  const navigate = useNavigate()

  const handleFilter = (countIn:string, subjectFilter:string) => {
   
      setLoad(true)
      setSolicitation([])
      socket.emit("handleFilter", countIn, "Aguardando", subjectFilter)

      socket.on("list", function(solicitation){
        console.log(solicitation)
        setSolicitation(solicitation)
        setLoad(false)
      })

  
  }
 

  function listSolicitation(){
    socket.on('list', function(solicitation){
      console.log(solicitation)
      setSolicitation(solicitation)
      setLoad(false)
    })
  }
  listSolicitation()

  function countPageSolicitation(){
    socket.on('countElements', function(countElements){
      console.log(countElements)
      setCountSolicitation(countElements)
    })
  }
  countPageSolicitation()

  function amountComputer(){
    socket.on('CountComputer', function(countElements){
      console.log(countElements)
      setCountContSolicitationComputer(countElements)
    })
  }
  amountComputer()

  function amountPhone(){
    socket.on('ContPhone', function(countElements){
      console.log(countElements)
      setCountContSolicitationPhone(countElements)
    })
  }
  amountPhone()


  useEffect(() =>{
    listSolicitation()
    countPageSolicitation()
    amountPhone()
    amountComputer()

  }, solicitation)
  return  (
     <>
      <Header />

      {/* <h1 className='text-slate-800 text-3xl font-bold flex justify-center mt-10 '>To do</h1> */}
          <div className='w-full h-20 flex justify-center bg-transparent mt-10 gap-20'>
            {/* <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  border-r'>
              <h1 className='text-[green] text-3xl font-bold flex justify-center '>12</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Etapas</h1>
            </div>
            <div className='w-[250px] h-[70px] bg-white flex flex-col justify-center items-center  border-r'>
              <h1 className='text-[yellow] text-3xl font-bold flex justify-center '>12</h1>
              <h1 className='text-neutral-500 text-sm font-regular flex justify-center'>Abandonos</h1>
            </div> */}
               <div className='w-[250px] h-[70px] bg-[#53BC00] flex flex-col justify-center items-center  shadow-lg  cursor-pointer rounded-lg '  onClick={() => handleFilter("countElements", "AllContent")}>
              <h1 className='text-white text-3xl font-bold flex justify-center '>{countSolicitation}</h1>
              <h1 className='text-white text-sm font-regular flex justify-center'>Total</h1>
            </div>
            <div className='w-[250px] h-[70px] bg-[#53BC00] flex flex-col justify-center items-center  shadow-lg  cursor-pointer rounded-lg ' onClick={() => handleFilter("CountComputer", "Computador")}>
              <h1 className='text-white text-3xl font-bold flex justify-center '>{contSolicitationComputer}</h1>
              <h1 className='text-white text-sm font-regular flex justify-center'>Computador</h1>
            </div>
            <div className='w-[250px] h-[70px] bg-[#53BC00] flex flex-col justify-center items-center  shadow-lg cursor-pointer rounded-lg ' onClick={() => handleFilter("ContPhone", "Celular")}>
              <h1 className='text-white text-3xl font-bold flex justify-center '>{contSolicitationPhone}</h1>
              <h1 className='text-white text-sm font-regular flex justify-center'>Celular</h1>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[90%]  border mt-10 rounded-lg  overflow-hidden ">
              <div className="w-full justify-between flex p-[15px] border-b">
                  <div>
                    <h1 className='text-slate-800 text-3xl font-bold flex justify-center '>Solicitações</h1>
                  </div>

                  {load == true && <Load /> }

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
                            <div className='w-[150px] h-[29px] rounded-[26px] bg-[#53BC00] flex flex-col justify-center items-center'>
                              <h1 className='text-white text-sm font-bold flex justify-center '>   {solicitation.status}</h1>
                            </div>
                        
                 
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
                  <h1 className='text-neutral-400 text-sm font-bold '>{page}-{Math.round(countSolicitation / 6)} de {countSolicitation} </h1>
                  <button onClick={() => handleClickPagination("Back")} ><CaretLeft className='cursor-pointer' /></button>
                  <button onClick={() => handleClickPagination("Next")} ><CaretRight className='cursor-pointer' /></button>
                  {/* <CaretRight className='cursor-pointer' onClick={() => handleClickPagination("Next")} disabled/> */}
                </div>
              </div>
          </div>
         
    </>
  )
}

export default Task
