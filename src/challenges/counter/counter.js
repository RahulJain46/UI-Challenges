import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState(1)

    const ChangeButton = (event) => {
        if (event.target.id == "minus") {
            setCount(count => count - input)
        } else {
            setCount(count => count + input)
        }
    }

    const InputChange = (event) => {
        let value = ''
        if (event.target.value !== undefined && event.target.value.length > 0) {
            value = parseInt(event.target.value)
        }
        if (typeof (value) === 'number') {
            setInput(value)
        }
    }

    return (
        <main style={{ display: "flex", flexDirection: "column" }}>
            <h2>
              Counter
            </h2>
            <h2 style={{ fontWeight: 700 }}>
                {count}
            </h2>
            <section>
                <button id="minus" onClick={ChangeButton}>
                    -
                </button>
                <button id="plus" onClick={ChangeButton}>
                    +
                </button>
            </section>
            <section>
                <label htmlFor="step">
                    Increment/Decrement by
                </label>
                <input
                    type="number"
                    onChange={InputChange}
                    value={input}
                >
                </input>
            </section>
        </main>
    )

}

export default Counter