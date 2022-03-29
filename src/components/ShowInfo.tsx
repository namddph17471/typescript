import React from 'react'
import type { ProductType } from '../types/product'
type ShowInfoProp={
  info :ProductType
}
const ShowInfo = (props:ShowInfoProp) => {
  return (
    <div>
      <h1>
        
      </h1>
      <h1>
        {props.info.name}
      </h1>
    </div>
  )
}

export default ShowInfo