import React, { useState, useEffect } from 'react'
const Mouse=() => {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const MousePosition = e => {
		setX(e.clientX)   // Get the horizontal coordinate
		setY(e.clientY)   // Get the vertical coordinate
	}

	useEffect(() => {
        window.addEventListener('mousemove', MousePosition)
        return () => {
        window.removeEventListener('mousemove', MousePosition)
    }
	}, [MousePosition])

	
	return (
		<div>
			<p> X-Direction= {x}</p>
			 <p>	Y -Direction={y}</p>
		</div>
	)
}

export default Mouse
