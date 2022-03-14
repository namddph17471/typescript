import React from 'react'

const ShowInfo:React.FC<{name:string}> = ({name}) => {
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default ShowInfo