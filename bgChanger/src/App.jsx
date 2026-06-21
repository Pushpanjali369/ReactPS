import { useState } from 'react'

function App() {
  const [box, setBox] = useState({
    name: "Emerald",
    color: "bg-emerald-500"
  })

  return (
    <div className="w-screen h-screen flex items-center justify-center relative bg-gray-100">

      {/* BOX (same size, centered) */}
      <div className={`w-72 h-72 shadow-2xl rounded-2xl ${box.color} flex items-center justify-center transition-all duration-500`}>
        <h1 className="text-white text-3xl font-bold">
          {box.name}
        </h1>
      </div>

      {/* BUTTON PANEL (ONLY bottom fixed, NOT center) */}
      <div className="fixed flex flex-wrap justify-end items-end mr-7 mt-7 buttom-12 inset-x-0 px-2 rounded-lg">
        
        <div className="flex flex-col gap-2 p-3 bg-green-300 rounded-lg">
          
          <button onClick={() => setBox({name:"amber",color:"bg-amber-600"})} className='w-10 h-10 rounded-full bg-amber-600'></button>
          <button onClick={() => setBox({name:"purple",color:"bg-purple-600"})} className='w-10 h-10 bg-purple-600 rounded-full '></button>
          <button onClick={() => setBox({name:"cyan",color:"bg-cyan-400"})}className='w-10 h-10 bg-cyan-400 rounded-full '></button>
          <button onClick={() => setBox({name:"dark",color:"bg-amber-950"})}className='w-10 h-10 rounded-full bg-amber-950'></button>
          <button onClick={() => setBox({name:"red",color:"bg-red-500"})}className='w-10 h-10 bg-red-500 rounded-full '></button>
          
        

          <button onClick={() => setBox({name: "green", color:"bg-green-600"})}className='w-10 h-10 bg-green-600 rounded-full '></button>
          <button onClick={() => setBox({name: "blue",color:"bg-blue-600"})}className='w-10 h-10 rounded-full bg-blue-600'></button>
          <button onClick={() => setBox({name: "indigo",color:"bg-indigo-950"})}className='w-10 h-10 bg-indigo-950 rounded-full'></button>
          <button onClick={() => setBox({name: "Dark",color:" bg-sky-900"})}className='w-10 h-10 bg-sky-900 rounded-full '></button>

        </div>

      </div>

    </div>
  )
}

export default App