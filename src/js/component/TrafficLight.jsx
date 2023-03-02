import React, { useState } from "react";
import "../../styles/index.css";


const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	const [showPurple, setShowPurple] = useState(false);

	const red = selectedColor === 'red' ? 'light red selected' : 'light red';
	const yellow = selectedColor === 'yellow' ? 'light yellow selected' : 'light yellow';
	const green = selectedColor === 'green' ? 'light green selected' : 'light green';
	const purple = selectedColor === "purple" ? "light purple selected" : "light purple";

	const changeColor = (e) => {
		setSelectedColor(e.target.id);
		console.log(e.target.id);
	}

	const changeColorRandom = () => {
		if (selectedColor === 'red') {
			setSelectedColor('yellow');
		} else if (selectedColor === 'yellow') {
			setSelectedColor('green');
		} else if (selectedColor === 'green') {
			setSelectedColor('red');
		}
		// else if (selectedColor === 'purpple') {
		// 	setSelectedColor('red');
		// }
	}

	const toggleShowPurple = () => {
		setShowPurple(!showPurple);
	};

	return (
		<>
			<div className="container traffic-light bg-dark">
				<div onClick={changeColor} className={red} id="red"></div>
				<div onClick={changeColor} className={yellow} id="yellow"></div>
				<div onClick={changeColor} className={green} id="green"></div>
				{showPurple && <div onClick={changeColor} className={purple} id="purple"></div>}


			</div>
			<div className="container buttons bg-dark bg-opacity-50">
				{/* <button onClick={changeColorRandom} className="btn btn-dark p-1 m-2">RANDOM</button>
				<button onClick={changeColorRandom} className="btn btn-dark p-1 m-2">TURN OFF</button>
				<button onClick={changeColorRandom} className="btn btn-dark p-1 m-2">ADD PURPLE</button> */}
				<a onClick={changeColorRandom}><span></span><span></span><span></span><span></span>
					COLOR RANDOM
				</a>
				<a onClick={changeColorRandom}><span></span><span></span><span></span><span></span>
					TURN OFF
				</a>
				<a onClick={toggleShowPurple}><span></span><span></span><span></span><span></span>
					{showPurple ? "HIDE PURPLE" : "SHOW PURPLE"}
				</a>


			</div>

		</>
	);

};



export default TrafficLight;