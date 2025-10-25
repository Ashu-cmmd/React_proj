import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive")

   return (
     <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-4 rounded-2xl"> 
           <button 
           onClick={() => setColor("red")}
           class className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>red</button>
           <button onClick={() => setColor("green")}
           class className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
           <button onClick={() => setColor("blue")}
           class className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
           <button onClick={() => setColor("yellow")}
           class className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
          
         </div>
       </div>
     </div>
   )

  /* const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = [
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Green', value: '#00ff00' },
    { name: 'Yellow', value: '#ffff00' },
    { name: 'Purple', value: '#800080' },
  ];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="color-changer" style={{ backgroundColor }}>
      <h2>Color Changer</h2>
      <div className="button-container">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => handleColorChange(color.value)}
            style={{ backgroundColor: color.value }}
            className="color-button"
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );  */
}

export default App
