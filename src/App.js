import React from 'react'
import './App.css'
import CounterOne from './components/CounterOne'
import Mouse from "./components/Mouse";
import MouseContainer from './components/MouseContainer'
import Fetching from './components/Fetching'
import Fetching1 from './components/Fetching1'
import IntervalCounter from './components/IntervalCounter';
import Name from "./components/Name";
import Addrandom from './components/Addrandom';
const App = () => {
	return (
		<div className="container">
			<div className="counter">
				<CounterOne />
				</div>
				<div className="mouse">
				<Mouse/>
				</div>
				<div className="toggle">
				<MouseContainer />
				</div>
				<div className="interval">
				<IntervalCounter />
				</div>
				<div className="fetch">
				<Fetching />
				</div>
				<div className="add">
				<Addrandom />
				</div>
				<div className="name">
				<Name />
				</div>
				<div className="fetch1">
				<Fetching1 />
				</div>
				
		</div>
	)
}
export default App;

