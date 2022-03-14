import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './ShowInfo'

function App() {
  const [count, setCount] = useState(0)
type TProduct = {
  id:number,
  name:string,
}
const [products,setProduct] = useState<TProduct[]>([{id:1,name:'Vô thủy'}])
  return (
    <div className="App">
      < ShowInfo name='Từ'/>
    </div>
  )
}

export default App
