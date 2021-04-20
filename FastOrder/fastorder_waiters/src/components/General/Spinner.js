import React from 'react'
import '../../assets/styles/components/spinner.css'

const Spinner = () => {
  return (
    <div className='center'>
      <div className='lds-ring'><div> </div><div> </div><div> </div><div> </div></div> 
    </div>
  )
}

export default Spinner
