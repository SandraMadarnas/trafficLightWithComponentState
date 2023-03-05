import React, { useState } from "react";
import "../../styles/index.css";


const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState('none');
	const [showPurple, setShowPurple] = useState(false);

	const red = selectedColor === 'red' ? 'light red selected-red' : 'light red';
	const yellow = selectedColor === 'yellow' ? 'light yellow selected-yellow' : 'light yellow';
	const green = selectedColor === 'green' ? 'light green selected-green' : 'light green';
	const purple = selectedColor === "purple" ? "light purple selected-purple" : "light purple";

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

	const apagarLuces = () => {
		setSelectedColor('none');
	};

	return (
		<>
			<div className="container stick bg-dark"></div>
			<div className="container traffic-light bg-dark">
				<div onClick={changeColor} className={red} id="red"></div>
				<div onClick={changeColor} className={yellow} id="yellow"></div>
				<div onClick={changeColor} className={green} id="green"></div>
				{showPurple && <div onClick={changeColor} className={purple} id="purple"></div>}


			</div>

			<div className="container">
				<div className="mando">
					<div className="top">
						<div className="marca"> TrafficLight </div>
						<div className="boton power" onclick={apagarLuces}>
							<i className="fa fa-power-off fa-2x" aria-hidden="true"></i>
						</div>
					</div>
					<div className="container-buttons">
						<a onClick={changeColorRandom}><span></span><span></span><span></span><span></span>
							COLOR RANDOM
						</a>
						<a onClick={toggleShowPurple}><span></span><span></span><span></span><span></span>
							{showPurple ? "HIDE PURPLE" : "SHOW PURPLE"}
						</a>

					</div>
				</div>
			</div>


			{/* <div class="phone">
				<div class="speakers"> </div>
				<div class="space"> </div>
				<div class="screen">
					<div className="container-buttons">
						<img src="https://4geeksacademy.com//images/4geeks-logo.png" className="logo-img-phone"/>
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
				</div>
			</div> */}
		</>
	);

};


// export default TrafficLight;

















// const TrafficLight = () => {
//     const [color, setColor] = React.useState("red");

//     const handleClick = (selectedColor) => {
//       setColor(selectedColor);
//     }

//     return (
//       <div className="container">
//         <div className={`light red ${color === 'red' ? 'selected' : ''}`} onClick={() => handleClick('red')}></div>
//         <div className={`light yellow ${color === 'yellow' ? 'selected' : ''}`} onClick={() => handleClick('yellow')}></div>
//         <div className={`light green ${color === 'green' ? 'selected' : ''}`} onClick={() => handleClick('green')}></div>
//       </div>
//     );
//   }

//   ReactDOM.render(<TrafficLight />, document.querySelector('#app'));