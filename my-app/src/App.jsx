import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Item from './components/Item'

function App() {
  const [count, setCount] = useState(0)
  const [products,setProduct] = useState([
    {id:1,name:"Vô thủy"},
    {id:2,name:"Từ"},
    {id:3,name:"Trương"}
  ])
  const removeItem = (id)=>{
    const newProduct = products.filter(item => item.id !== id);
    setProduct(newProduct);
  }
  return (
    <div className="App">
      Count:{count}
      <button onClick={()=> setCount(count + 1)}>Click</button>
      {products.map((item,index)=>
      <div>
          <p>{item.name}</p>
          <button onClick={()=> removeItem(item.id)}>Xóa</button>
      </div>
      
       )}
      <ShowInfo name="Vô Thủy" />
    </div>
  )
}

export default App
