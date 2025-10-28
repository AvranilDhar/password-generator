import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

const App = () => {
  const[password, setPassword] = useState("");
  const[length , setLength] = useState(6);
  const[numbers , setNumbers] = useState(false);
  const[specialChar , setSpecialChar] = useState(false);

  const generatePass = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbers) str += "0123456789";
    if(specialChar) str+= "_@."
    for(let i = 1; i<=length ; i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass +=str.charAt(char);
    }
    setPassword(pass);
  },[length, numbers , specialChar , setPassword])

  useEffect(()=>{
    generatePass();
  },[length,numbers,specialChar,generatePass,setPassword])

  return (
    <>
    <div className='bg-gray-800 h-screen w-screen flex justify-center items-center'>
      <div className='min-h-[250px] min-w-[600px] rounded-3xl bg-white flex flex-col justify-between items-center py-6 px-3'>
        <h1 className='text-3xl'>Password Generator</h1>
        <div className='w-full flex justify-center items-center'>
          <input type="text" value={password} readOnly className='w-fit py-3 px-3 border-blue-500 border-t border-b border-l rounded-l-2xl ' />
          <button className='bg-blue-500 py-3 px-3 border-blue-500 border rounded-r-2xl active:bg-blue-300 '>Copy</button>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <div className='flex gap-x-2'>
          <input type="range" className='cursor-pointer'value={length} min={6} max={15} onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length:{length}</label>
        </div>
        <div className='flex gap-x-2'>
          <input type="checkbox" name="numbers" id="numbers" onChange={()=>{setNumbers((prev)=>!prev)}}/>
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className='flex gap-x-2'>
          <input type="checkbox" name="specialChar" id="specialChar" onChange={()=>{setSpecialChar((prev)=>!prev)}} />
          <label htmlFor="specialChar">Special Character</label>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App