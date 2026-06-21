import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numbweAllowed , setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("")


  const passRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz"

    if(numbweAllowed) str += "0123456789"
    if(charAllowed) str += "!@€#%^&*(){}[]|\?/,-_+=~`<>"

    for(let i = 0; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numbweAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect(() => {passwordGenerator()}, [length,numbweAllowed,charAllowed, passwordGenerator])
  return (


    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-950 via-slate-900 to-black p-5">
      <div className="w-[500px] bg-slate-900 border border-yellow-900 rounded-3xl shadow-2xl shadow-yellow-500/20 p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-2">
🔐 Password Generator
</h1>

<p className="text-center text-gray-400 mb-8">
Generate secure passwords instantly
</p>
       
    <div className="flex w-full mb-6">
        <input className="flex-1 bg-slate-800 border border-yellow-500 rounded-l-xl p-3 text-yellow-200 outline-none"
        type='text' value={password} placeholder='password' readOnly ref={passRef}
        
        />
        <button 
        onClick={copyPasswordToClipboard}
        className="bg-yellow-500 hover:bg-yellow-400 transition duration-300 px-5 rounded-r-xl font-semibold text-black">copy</button>
    </div>

    <div >
      <div >
        <label className="text-yellow-300 font-semibold">
        Password Length : {length}
        </label>
        <input className='bg-amber-400'
        type='range'
        min={6}
        max={100}
        value={length}
        className="w-full mt-3 accent-yellow-400 cursor-pointer"
        onChange={(e) => {setLength(e.target.value)}}
        />

      </div>
      <div className='flex justify-around mt-5 '>
      <div className="flex items-center gap-2 mt-4 text-yellow-100">
        <input type="checkbox"
        defaultChecked = {numbweAllowed} 
        id = "numberInput"
        onChange={()=>{
          setNumberAllowed((prev) => !prev);
        }}/>
        <label className="cursor-pointer">Numbers</label>
      </div>

        <div className='flex items-center gap-2 mt-4 text-yellow-100'>
        <input type="checkbox"
        defaultChecked = {charAllowed} 
        id = "charInput"
        onChange={()=>{
          setCharAllowed((prev) => !prev);
        }}/>
        <label className="cursor-pointer">Symbols</label>
      </div>
</div>
      <button onClick={passwordGenerator}
      className="w-full mt-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition duration-300 text-black font-bold py-3 rounded-xl"> Generate Password
     </button>

    </div>
  </div>
</div>
   
   
  )
}

export default App
