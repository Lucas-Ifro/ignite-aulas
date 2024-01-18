import React from "react";
import { useState } from "react";


export function Counter() {
    let [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter++)
    }

    return (
        <div>
            <h2 id="numero">{ counter }</h2>
            <input type="button" value="increment" onClick={increment}/>
        </div>
    );
}