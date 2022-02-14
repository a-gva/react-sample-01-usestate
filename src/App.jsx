import {useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(5)

    function decrementCount() {
        setCount(currentState => currentState - 1)
    }
    function incrementCount() {
        setCount(currentState => currentState + 1)
    }

    const [state, setState] = useState({grade: 7, name: 'Manoel'})
    const grade = state.grade
    const name = state.name

    function decrementGrade() {
        setState(prevState => {
            return {
                ...prevState,
                grade: prevState.grade - 1
            }
        })
    }

    function incrementGrade() {
        setState(prevState => {
            return {
                ...prevState,
                grade: prevState.grade + 1
            }
        })
    }

    return (
        <div className='App'>
            <div>
                <h1>useState</h1>
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <div>
                <h1>useState (com objetos)</h1>
                <button onClick={decrementGrade}>-</button>
                <span>Grade: {grade} </span>
                <button onClick={incrementGrade}>+</button>
                <span>{name}</span>
            </div>
        </div>
    )
}

export default App
