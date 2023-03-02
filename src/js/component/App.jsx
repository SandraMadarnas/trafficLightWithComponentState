// PROBAR CON IMAGENES EN VEZ DE SEMAFORO CSS
const changeColor = () => {
  const colors = ["red", "yellow", "green"];
};

const turnOn = {
  red: () => (img.src = "../img/rojo.png"),
  yellow: () => (img.src = "../img/amarillo.png"),
  green: () => (img.src = "../img/verde.png"),
};

buttons.addEventListener("click", trafficLight);


















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