import React from 'react'

function page() {
  if(typeof window !== 'undefined') console.log(window.localStorage.getItem("balance"))
  
  return (
    <div>
      
    </div>
  )
}

export default page