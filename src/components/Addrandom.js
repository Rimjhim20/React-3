import React,{useState} from 'react'

const Addrandom = () => {
    const [items,setItems]=useState([])

    const Additem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random() *10)+1
        }])
    }
    return (
        <div>
            <button onClick={Additem}>Add a number</button>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Addrandom
