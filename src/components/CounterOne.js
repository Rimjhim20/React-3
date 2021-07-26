import React, { useState, useEffect } from 'react'
const CounterOne = () => {
	const[count,setCount] =useState(0);
	const [name, setName] = useState("Rimjhim")
	useEffect(()=>{
		document.title=`you clicked ${count} times`;
	},[count])
	return (
		<>
			<p >You clicked {count} times</p>
			<button onClick={()=> setCount(count+1)}>Click me</button>
			<input type="text" value={name} onChange={e => setName(e.target.value)} />
	</>
	)
}
export default CounterOne


