import { useState } from 'react'

function App() {
  const [color, setColor] = useState("bg-green-100")
  const [name, setName] = useState("green")

  return (
  
      <div className={`w-72 h-72 shadow-2xl rounded-2xl ${color} ${name}`}>
          <div className='fixed flex flex-wrap justify-end items-end mr-7 mt-7 buttom-12 inset-x-0 px-2 rounded-lg'>
    
          
            <div className='flex flex-col gap-2 rounded-lg p-2 bg-amber-300'>
              
              <button onClick={() => setColor("bg-amber-600")} className='w-10 h-10 rounded-full bg-amber-600'></button>
              <button onClick={() => setColor("bg-purple-600")} className='w-10 h-10 bg-purple-600 rounded-full '></button>
              <button onClick={() => setColor("bg-cyan-400")}className='w-10 h-10 bg-cyan-400 rounded-full '></button>
              <button onClick={() => setColor("bg-amber-950")}className='w-10 h-10 rounded-full bg-amber-950'></button>
              <button onClick={() => setColor("bg-red-500")}className='w-10 h-10 bg-red-500 rounded-full '></button>

              <button onClick={() => setColor("bg-green-600")}className='w-10 h-10 bg-green-600 rounded-full '></button>
              <button onClick={() => setColor("bg-blue-600")}className='w-10 h-10 rounded-full bg-blue-600'></button>
              <button onClick={() => setColor("bg-indigo-950")}className='w-10 h-10 bg-indigo-950 rounded-full '></button>
              <button onClick={() => setColor(" bg-amber-900")}className='w-10 h-10 bg-amber-900 rounded-full '></button>

              
            </div>

          </div>
      </div>
  
  )
}

export default App
