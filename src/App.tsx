import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>[Group Name Goes Here]</h1>
            <p className="course-details">
                [Insert Course Details here]
            </p>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Temporary Button
                </button>
            </div>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="about-us">
                Daniel Zhuo,
                Daniel Frankel,
                Joel Mills,
                Ethan something,
                Jacob Something,
            </p>
        </>
    )
}

export default App
