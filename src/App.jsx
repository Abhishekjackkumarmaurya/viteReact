const App=()=>{
     let ABC=10;
     const changeHandler=()=>{
          ABC++;
          console.log(ABC);
     }
     return(
      <>
        <h1>{ABC}</h1>
        <h2>Hello World</h2>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing eaque consequatur ab aliquid.</h3>
        <button onClick={changeHandler}>Change age</button>
        <h1>{ABC}</h1>
        <h1 >{new Date().toLocaleString()}</h1>
        <header></header>
        <section></section>
        <footer></footer>

      </>
     )
}

export default App;




import React, { useState, useEffect } from 'react';

const LiveTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timerID);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{currentTime}</p>
    </div>
  );
};

export default LiveTime;


const App =()=>{
  const testHandler=(message)=>{
    console.log("Print message :",message);
  }

return(
  <div>
    <button onClick={()=>testHandler("Hello World")}>Click here</button>
  </div>
)
}

export default App;
