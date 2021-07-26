import React, { useEffect,useState } from 'react'
import axios from "axios";

const Fetching=()=> {
	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/posts/")
	// 		.then((response) => {
    //   return response.json();
	// 		})
	// 		.then((data) =>{
	// 			console.log(data);
	// 		});
       
	// }, []);
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [idFromButtonClick, setIdButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
        console.log(res)
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		setId(id)
	}
	return (
		<div>
			<input type="text" value={id} onChange={e => setIdButtonClick(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div >{post.title}</div>
			</div>
			)
	
	
}

export default Fetching
