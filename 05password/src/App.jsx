import { useState, useCallback ,useEffect , useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Use ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => { // useCallback memorise the function how much it need or some part of the function or all of it
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*({]~`";

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
    // in the below line we gave setpassword not password because it will always changing 
  }, [length, numAllowed, charAllowed, setPassword ]); // we are giving the method which will make it optimize

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  } ,[password])

  useEffect(() => { // It will rerun the page if any effect / changes will there in the dependencese array.. 
    passwordGenerator( )
  } ,[length ,numAllowed , charAllowed , passwordGenerator]) // if there is any change in this function run the program again 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-3 bg-amber-50">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 transition transform active:scale-95 active:bg-blue-800"
          onClick={copypasswordToClipboard} >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numAllowed}
              id="numInput"
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label >Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label >Symbols</label>
          </div>
        </div>

       
      </div>
    </>
  );
}

export default App;
