import React, { useState } from 'react'




const App = () => {
   const [ color , setColor] = useState('olive')

   const changerandamcolor = () => {
    const  a =  `#${Math.floor(Math.random()*16777215).toString(16)}`
    setColor(a)  
    
   

  }



  return (
    <div className= " w-full  h-screen    duration-200  "  
    style={{backgroundColor: color}}
    >
<div className='fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center  px-3 py-2 gap-3  shadow-lg  bg-white  rounded-3xl'> 
  <button className=' outline-none  px-4  py-1  rounded-full '  style={{backgroundColor: 'red'}}  
    onClick={() => setColor('red')}
  >
    Red
  </button>
  <button className=' outline-none  px-4  py-1  rounded-full '  style={{backgroundColor: 'green'}} 
    onClick={() => setColor('green')}
  >
    Green
  </button>


  <button className=' outline-none  px-4  py-1  rounded-full  text-white '  style={{backgroundColor: '#000'}} 
    onClick={changerandamcolor}
  >
 Rendom color
  </button>



  </div>
</div>

    </div>
  )
}

export default App