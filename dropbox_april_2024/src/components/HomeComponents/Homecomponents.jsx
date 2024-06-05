import React from 'react'
import ShowItems from '../showitems/showitems';



const Homecomponents = () => {

  const folders = ["newfolder", "new folder 2"];
  const files = ["new file", "new file 2"];


  return (
    <div className='col-md-12 w-100'>
      <ShowItems title={"created folders"} items={folders}/>
      <ShowItems title={"created files"} items={files}/>
      
    </div>
  )
}

export default Homecomponents
