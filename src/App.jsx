import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TestComponent() {
  return (
    <div className='forTesting'>
      <p>Mars is testing</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestComponent />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mars' first React project</h1>
      <h2>Ain't that cool?!</h2>
      <p>Here to test deployment to Github pages :D</p>
      <p>Update test</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
