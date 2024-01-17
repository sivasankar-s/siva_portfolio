import React from 'react'

const Loading = () => {
  return (
    <div className='bg-black w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className='text-white text-xl sm:text-4xl text-center font-bold mr-5'>
        Entering into Siva's world...
        {/* <svg src={loading} className="animate-spin h-5 w-5 mr-3 text-center text-white" alt='loading spinner'/> */}
        </div>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="animate-spin -ml-1 mr-3 h-7 w-7 sm:h-10 sm:w-10 text-white" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"/><path fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" class="opacity-75"/></svg>
    
    </div>
  )
}

export default Loading