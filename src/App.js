import React, { useState } from "react";
import "./styles.css";

const App = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>My count is { count }</h1>
            <button onClick={()=>setCount(count+1)}>Add Count</button>
        </div>
    );
}

export default App; 
